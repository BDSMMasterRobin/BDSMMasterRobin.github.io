const STORAGE_SCHEMA_VERSION = 2;

const contractData = {
  introductions: {
    male: 'Der Herr übernimmt die dominante Rolle im Rahmen der vereinbarten Grenzen.',
    female: 'Die Herrin übernimmt die dominante Rolle im Rahmen der vereinbarten Grenzen.'
  },
  categories: [
    {
      id: 'alltag',
      name: 'Alltag & Verfügbarkeit',
      description: 'Regelt Kontakt, Rituale und allgemeine Verbindlichkeit.',
      levels: [
        { title: 'Sanft', description: 'Lose Absprachen mit viel Flexibilität.', content: 'Kontakt, Rituale und Verfügbarkeit werden vorher abgesprochen und können jederzeit angepasst werden.' },
        { title: 'Verbindlich', description: 'Regelmäßige Pflichten und Check-ins.', content: 'Es werden regelmäßige Check-ins, feste Reaktionszeiten und einfache Rituale vereinbart.' },
        { title: 'Strukturiert', description: 'Detaillierte Tages- oder Wochenstruktur.', content: 'Tages- oder Wochenpläne, Aufgabenlisten und Auswertungen werden verbindlich dokumentiert.' }
      ]
    },
    {
      id: 'gehorsam',
      name: 'Gehorsam & Aufgaben',
      description: 'Beschreibt Aufgaben, Regeln und Konsequenzen.',
      levels: [
        { title: 'Grundregeln', description: 'Wenige klar benannte Regeln.', content: 'Die submissive Person befolgt ausdrücklich vereinbarte Grundregeln und darf Unklarheiten jederzeit ansprechen.' },
        { title: 'Erweiterte Regeln', description: 'Zusätzliche Aufgaben und Protokolle.', content: 'Zusätzliche Aufgaben, Protokolle und Rückmeldungen werden festgelegt und respektvoll kontrolliert.' },
        { title: 'Umfassendes Regelwerk', description: 'Breites Regelwerk mit dokumentierten Konsequenzen.', content: 'Ein umfassendes Regelwerk mit Aufgaben, Ausnahmen und einvernehmlichen Konsequenzen wird geführt.' }
      ]
    },
    {
      id: 'grenzen',
      name: 'Grenzen & Sicherheit',
      description: 'Schützt Gesundheit, Tabus und Abbruchrechte.',
      levels: [
        { title: 'Basis-Sicherheit', description: 'Safewort und harte Grenzen.', content: 'Harte Grenzen, gesundheitliche Einschränkungen und ein Safewort werden vor jeder Session geprüft.' },
        { title: 'Nachsorge', description: 'Zusätzlich Aftercare und Check-out.', content: 'Nachsorge, emotionale Verarbeitung und ein Check-out nach Sessions sind verbindlich vorgesehen.' },
        { title: 'Risikomanagement', description: 'Detaillierte Risiko- und Notfallplanung.', content: 'Risiken, Notfallkontakte, medizinische Hinweise und Abbruchsignale werden schriftlich dokumentiert.' }
      ]
    },
    {
      id: 'diskretion',
      name: 'Diskretion & Datenschutz',
      description: 'Regelt Umgang mit Daten, Bildern und Öffentlichkeit.',
      levels: [
        { title: 'Vertraulich', description: 'Private Inhalte bleiben privat.', content: 'Namen, Inhalte und private Informationen werden vertraulich behandelt.' },
        { title: 'Freigaben', description: 'Explizite Freigabe für Medien und Dritte.', content: 'Fotos, Videos, Chatverläufe und Informationen dürfen nur nach ausdrücklicher Freigabe geteilt werden.' },
        { title: 'Löschpflichten', description: 'Klare Speicher- und Löschfristen.', content: 'Speicherorte, Löschfristen und Widerrufswege für persönliche Daten werden verbindlich festgelegt.' }
      ]
    }
  ],
  optionalSections: {
    tabu: '**Tabus und Grenzen**\nHarte Grenzen: ________________________________________________\nWeiche Grenzen: _______________________________________________\nGesundheitliche Hinweise: _____________________________________',
    safeword: '**Safewort und Abbruchsignal**\nSafewort: ____________________\nAmpelsystem: Grün = ok, Gelb = langsamer/prüfen, Rot = sofortiger Stopp. Ein Stopp wird ohne Diskussion respektiert.',
    customRules: '**Zusätzliche Regeln und Vereinbarungen**\n________________________________________________________________\n________________________________________________________________\n________________________________________________________________'
  }
};

const state = {
  step: 1,
  contractId: null,
  form: {
    contractName: 'Sklavenvertrag',
    dominantGender: 'male',
    submissiveGender: 'female',
    dominantName: '',
    dominantFirstname: '',
    dominantBirthdate: '',
    submissiveName: '',
    submissiveFirstname: '',
    submissiveBirthdate: '',
    submissiveNumber: '',
    selectedLevels: Object.fromEntries(contractData.categories.map((category) => [category.id, 1])),
    includeTabuSection: false,
    includeSafewordSection: true,
    includeCustomRulesSection: false,
    customText: ''
  }
};

const app = document.querySelector('#app');
const indicators = [...document.querySelectorAll('.step-indicator')];

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function field(value, fallback) {
  return String(value || '').trim() || fallback;
}

function titles() {
  return {
    dominant: state.form.dominantGender === 'male' ? 'Herr' : 'Herrin',
    submissive: state.form.submissiveGender === 'male' ? 'Sklave' : 'Sklavin'
  };
}

function updateProgress() {
  indicators.forEach((indicator) => {
    indicator.classList.toggle('active', Number(indicator.dataset.step) <= state.step);
  });
}

function setStep(step) {
  state.step = step;
  updateProgress();
  if (step === 1) renderStep1();
  if (step === 2) renderStep2();
  if (step === 3) renderStep3();
}

function renderStep1() {
  const label = titles();
  app.innerHTML = `
    <div class="step-container">
      <h2>Basisinformationen</h2>
      <div class="contract-loader">
        <label>Gespeicherten Offline-Vertrag laden
          <div class="input-group">
            <input id="load-id" class="text-input" placeholder="8-stellige Vertragsnummer">
            <button type="button" id="load-contract" class="button secondary">Laden</button>
          </div>
        </label>
      </div>
      <label>Vertragstyp <input id="contractName" class="text-input" value="${escapeHtml(state.form.contractName)}"></label>
      <div class="form-row">
        <div class="form-group"><span class="field-label">Dominante Rolle</span><div class="button-group">
          <button type="button" class="gender-button ${state.form.dominantGender === 'male' ? 'selected' : ''}" data-field="dominantGender" data-value="male">Herr</button>
          <button type="button" class="gender-button ${state.form.dominantGender === 'female' ? 'selected' : ''}" data-field="dominantGender" data-value="female">Herrin</button>
        </div></div>
        <div class="form-group"><span class="field-label">Submissive Rolle</span><div class="button-group">
          <button type="button" class="gender-button ${state.form.submissiveGender === 'male' ? 'selected' : ''}" data-field="submissiveGender" data-value="male">Sklave</button>
          <button type="button" class="gender-button ${state.form.submissiveGender === 'female' ? 'selected' : ''}" data-field="submissiveGender" data-value="female">Sklavin</button>
        </div></div>
      </div>
      <div class="form-row">
        <label>Name ${label.dominant}<input id="dominantName" value="${escapeHtml(state.form.dominantName)}" placeholder="Nachname"></label>
        <label>Name ${label.submissive}<input id="submissiveName" value="${escapeHtml(state.form.submissiveName)}" placeholder="Nachname"></label>
        <label>Vorname ${label.dominant}<input id="dominantFirstname" value="${escapeHtml(state.form.dominantFirstname)}" placeholder="Vorname"></label>
        <label>Vorname ${label.submissive}<input id="submissiveFirstname" value="${escapeHtml(state.form.submissiveFirstname)}" placeholder="Vorname"></label>
        <label>Geburtsdatum ${label.dominant}<input id="dominantBirthdate" value="${escapeHtml(state.form.dominantBirthdate)}" placeholder="TT.MM.JJJJ"></label>
        <label>Geburtsdatum ${label.submissive}<input id="submissiveBirthdate" value="${escapeHtml(state.form.submissiveBirthdate)}" placeholder="TT.MM.JJJJ"></label>
      </div>
      <label>Sklavennummer <input id="submissiveNumber" value="${escapeHtml(state.form.submissiveNumber)}" placeholder="Optional"></label>
      <div class="navigation-buttons"><button type="button" id="next" class="button primary">Weiter</button></div>
    </div>`;

  app.querySelectorAll('input[id]').forEach((input) => {
    input.addEventListener('input', () => { state.form[input.id] = input.value; });
  });
  app.querySelectorAll('.gender-button').forEach((button) => {
    button.addEventListener('click', () => {
      state.form[button.dataset.field] = button.dataset.value;
      renderStep1();
    });
  });
  app.querySelector('#load-contract').addEventListener('click', loadContract);
  app.querySelector('#load-id').addEventListener('keydown', (event) => { if (event.key === 'Enter') loadContract(); });
  app.querySelector('#next').addEventListener('click', () => setStep(2));
}

function renderStep2() {
  app.innerHTML = `
    <div class="step-container">
      <h2>Vertragsstufen auswählen</h2>
      <p class="step-description">Wähle pro Kategorie genau eine Stufe. Im Vertrag erscheint nur die ausgewählte Stufe.</p>
      <div class="levels-container">${contractData.categories.map(renderCategory).join('')}</div>
      <div class="optional-sections">
        <h3>Optionale Vertragssektionen</h3>
        ${renderCheckbox('includeTabuSection', 'Tabu-Sektion einschließen')}
        ${renderCheckbox('includeSafewordSection', 'Safewort-Sektion einschließen')}
        ${renderCheckbox('includeCustomRulesSection', 'Zusätzliche Regeln einschließen')}
        <label>Eigene Ergänzungen<textarea id="customText" rows="6" placeholder="Eigene Regeln, Fristen, Grenzen oder Nachsorge ergänzen …">${escapeHtml(state.form.customText)}</textarea></label>
      </div>
      <div class="navigation-buttons"><button type="button" id="back" class="button secondary">Zurück</button><button type="button" id="preview" class="button primary">Vorschau generieren</button></div>
    </div>`;

  app.querySelectorAll('.level-option').forEach((button) => {
    button.addEventListener('click', () => {
      state.form.selectedLevels[button.dataset.category] = Number(button.dataset.level);
      renderStep2();
    });
  });
  app.querySelectorAll('[data-option]').forEach((input) => {
    input.addEventListener('change', () => { state.form[input.dataset.option] = input.checked; });
  });
  app.querySelector('#customText').addEventListener('input', (event) => { state.form.customText = event.target.value; });
  app.querySelector('#back').addEventListener('click', () => setStep(1));
  app.querySelector('#preview').addEventListener('click', () => setStep(3));
}

function renderCheckbox(id, label) {
  return `<label class="section-option"><input type="checkbox" data-option="${id}" ${state.form[id] ? 'checked' : ''}> ${label}</label>`;
}

function renderCategory(category) {
  const selected = Number(state.form.selectedLevels[category.id] || 1);
  return `<article class="level-selector"><h3>${category.name}</h3><p>${category.description}</p><div class="level-options">${category.levels.map((level, index) => {
    const number = index + 1;
    return `<button type="button" class="level-option ${selected === number ? 'selected' : ''}" data-category="${category.id}" data-level="${number}"><span class="level-number">${number}</span><strong>${level.title}</strong><small>${level.description}</small></button>`;
  }).join('')}</div><div class="level-preview"><strong>Vorschau Stufe ${selected}:</strong> ${category.levels[selected - 1].content}</div></article>`;
}

function buildContract() {
  const label = titles();
  const lines = [];
  lines.push(`**${field(state.form.contractName, 'Sklavenvertrag')}**`, '');
  lines.push(`Dieser Vertrag wird zwischen ${label.submissive}`, '');
  lines.push(`Sklaven-Nummer: ${field(state.form.submissiveNumber, '_____________________')}`, '');
  lines.push(`Name: ${field(state.form.submissiveName, '_____________________')}`);
  lines.push(`Vorname: ${field(state.form.submissiveFirstname, '_____________________')}`);
  lines.push(`Geburtsdatum: ${field(state.form.submissiveBirthdate, '__.__.____')}`, '');
  lines.push(`und dem neuen Eigentümer / der neuen Eigentümerin (künftig ${label.dominant} genannt)`, '');
  lines.push(`Name: ${field(state.form.dominantName, '_____________________')}`);
  lines.push(`Vorname: ${field(state.form.dominantFirstname, '_____________________')}`);
  lines.push(`Geburtsdatum: ${field(state.form.dominantBirthdate, '__.__.____')}`, '');
  lines.push('geschlossen.', '');
  lines.push(contractData.introductions[state.form.dominantGender], '');
  lines.push('**Vertragsbedingungen**', '');
  contractData.categories.forEach((category) => {
    const selected = Number(state.form.selectedLevels[category.id] || 1);
    const level = category.levels[selected - 1];
    lines.push(`**${category.name}**`, '');
    lines.push(level.content, '');
  });
  lines.push('**Abschlussbestimmungen**', 'Die Parteien bestätigen, dass alle Vereinbarungen freiwillig, einvernehmlich und widerrufbar sind. Grenzen, Gesundheit und Sicherheit gehen jederzeit vor.', '');
  if (state.form.includeSafewordSection) lines.push(contractData.optionalSections.safeword, '');
  if (state.form.includeTabuSection) lines.push(contractData.optionalSections.tabu, '');
  if (state.form.includeCustomRulesSection) lines.push(contractData.optionalSections.customRules, '');
  if (state.form.customText.trim()) lines.push('**Eigene Ergänzungen**', state.form.customText.trim(), '');
  lines.push('Ort, Datum: _____________________', '', `Unterschrift ${label.dominant}: _____________________`, '', `Unterschrift ${label.submissive}: _____________________`, '');
  return lines.join('\n').replace(/\n{3,}/g, '\n\n');
}

function renderStep3() {
  const contract = buildContract();
  app.innerHTML = `
    <div class="step-container">
      <h2>Vertragsvorschau</h2>
      <div class="contract-id-container ${state.contractId ? '' : 'hidden'}"><span>Offline-Vertragsnummer: <strong>${state.contractId || ''}</strong></span></div>
      <div class="preview-mode-selector"><button type="button" id="preview-mode" class="mode-button selected">Vorschau</button><button type="button" id="edit-mode" class="mode-button">Bearbeiten</button></div>
      <div id="contract-preview" class="contract-preview">${formatContract(contract)}</div>
      <textarea id="contract-editor" class="contract-editor hidden">${escapeHtml(contract)}</textarea>
      <div class="navigation-buttons"><button type="button" id="back" class="button secondary">Zurück</button><div class="action-buttons"><button type="button" id="save" class="button secondary">Offline speichern</button><button type="button" id="download" class="button secondary">Als Text herunterladen</button><button type="button" id="copy" class="button secondary">Kopieren</button><button type="button" id="print" class="button primary">Drucken / PDF</button></div></div>
    </div>`;

  const preview = app.querySelector('#contract-preview');
  const editor = app.querySelector('#contract-editor');
  app.querySelector('#preview-mode').addEventListener('click', () => {
    preview.innerHTML = formatContract(editor.value);
    preview.classList.remove('hidden');
    editor.classList.add('hidden');
    app.querySelector('#preview-mode').classList.add('selected');
    app.querySelector('#edit-mode').classList.remove('selected');
  });
  app.querySelector('#edit-mode').addEventListener('click', () => {
    preview.classList.add('hidden');
    editor.classList.remove('hidden');
    app.querySelector('#edit-mode').classList.add('selected');
    app.querySelector('#preview-mode').classList.remove('selected');
  });
  app.querySelector('#back').addEventListener('click', () => setStep(2));
  app.querySelector('#save').addEventListener('click', saveContract);
  app.querySelector('#download').addEventListener('click', () => downloadText(currentText()));
  app.querySelector('#copy').addEventListener('click', async () => { await navigator.clipboard.writeText(currentText()); alert('Vertragstext wurde kopiert.'); });
  app.querySelector('#print').addEventListener('click', printContract);
}

function currentText() {
  const editor = app.querySelector('#contract-editor');
  return editor ? editor.value : buildContract();
}

function formatContract(text) {
  return escapeHtml(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
}

function saveContract() {
  const id = state.contractId || String(Math.floor(10000000 + Math.random() * 90000000));
  state.contractId = id;
  localStorage.setItem(`offline-contract-${id}`, JSON.stringify({
    schemaVersion: STORAGE_SCHEMA_VERSION,
    form: state.form,
    text: currentText(),
    savedAt: new Date().toISOString()
  }));
  alert(`Offline gespeichert. Vertragsnummer: ${id}`);
  renderStep3();
}

function loadContract() {
  const id = app.querySelector('#load-id').value.trim();
  const raw = localStorage.getItem(`offline-contract-${id}`);
  if (!/^\d{8}$/.test(id)) return alert('Bitte eine 8-stellige Vertragsnummer eingeben.');
  if (!raw) return alert('Kein Offline-Vertrag mit dieser Nummer gefunden.');
  const saved = JSON.parse(raw);
  state.contractId = id;
  state.form = { ...state.form, ...saved.form };
  setStep(3);
  const rebuiltText = buildContract();
  app.querySelector('#contract-editor').value = rebuiltText;
  app.querySelector('#contract-preview').innerHTML = formatContract(rebuiltText);
}

function downloadText(text) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${field(state.form.contractName, 'vertrag').replace(/[^\wäöüÄÖÜß-]+/g, '_')}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function printContract() {
  const popup = window.open('', '_blank');
  const template = document.querySelector('#print-template').innerHTML;
  popup.document.write(template);
  popup.document.querySelector('pre').textContent = currentText();
  popup.document.close();
  popup.focus();
  popup.print();
}

indicators.forEach((indicator) => indicator.addEventListener('click', () => {
  const target = Number(indicator.dataset.step);
  if (target <= state.step) setStep(target);
}));

setStep(1);

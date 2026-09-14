const STORAGE_SCHEMA_VERSION = 2;

const contractData = {
  introductions: {
    male: 'Der Herr übernimmt die führende und dominante Rolle in der Beziehung. Er verpflichtet sich, seine Macht stets im Rahmen der vereinbarten Grenzen, mit Umsicht und zum Wohle der Sicherheit beider Parteien auszuüben.',
    female: 'Die Herrin übernimmt die führende und dominante Rolle in der Beziehung. Sie verpflichtet sich, ihre Macht stets im Rahmen der vereinbarten Grenzen, mit Umsicht und zum Wohle der Sicherheit beider Parteien auszuüben.'
  },
  categories: [
    {
      id: 'alltag',
      name: 'Alltag & Verfügbarkeit',
      description: 'Regelt Erreichbarkeit, Meldepflichten und Alltagsstruktur.',
      levels: [
        { 
          title: 'Flexibel', 
          description: 'Einvernehmliche Kontaktaufnahme ohne feste Verpflichtungen.', 
          content: 'Kontaktzeiten, kleine Dienstleistungen und zeitliche Verfügbarkeiten werden von Fall zu Fall abgesprochen. Berufliche und private Verpflichtungen beider Parteien haben stets Vorrang.' 
        },
        { 
          title: 'Verbindlich', 
          description: 'Feste Melderituale und definierte Reaktionszeiten.', 
          content: 'Die submissive Person hält festgelegte Melderituale (z. B. Morgen- und Abendgruß) ein. Nachrichten der dominanten Person sind innerhalb eines vereinbarten Zeitfensters Priorität einzuräumen.' 
        },
        { 
          title: 'Strukturiert', 
          description: 'Detaillierte Führung von Tagesablauf und persönlichen Entscheidungsprozessen.', 
          content: 'Die dominante Person nimmt aktiv Einfluss auf die Gestaltung des Tagesablaufs, Verhaltensregeln im Alltag sowie Entscheidungen bezüglich Kleidung, Ernährung oder Freizeitgestaltung der submissiven Person.' 
        }
      ]
    },
    {
      id: 'gehorsam',
      name: 'Gehorsam & Aufgaben',
      description: 'Definiert Verhaltensregeln, Dienstpflichten und Korrekturmaßnahmen.',
      levels: [
        { 
          title: 'Grundgehorsam', 
          description: 'Befolgung direkter Anweisungen während gemeinsamer Sessions.', 
          content: 'Die submissive Person befolgt erteilte Anweisungen unverzüglich und gewissenhaft, sofern diese nicht gegen vereinbarte Tabus verstoßen. Unklarheiten sind direkt anzusprechen.' 
        },
        { 
          title: 'Erweitertes Protokoll', 
          description: 'Feste Dienstaufgaben, Haltungsvorschriften und korrigierende Maßnahmen.', 
          content: 'Über das Spiel hinaus gelten festgelegte Verhaltens- und Dienstprotokolle (z. B. Anrede, Haltung, Aufgaben im Haushalt). Regelverstöße werden mit einvernahmlich festgelegten Disziplinierungsmaßnahmen geahndet.' 
        },
        { 
          title: 'Umfassende Erziehung', 
          description: 'Strenge Regeltreue mit lückenloser Rechenschaftspflicht.', 
          content: 'Ein umfassendes Regelwerk steuert das tägliche Verhalten. Die dominante Person führt Buch über Pflichtverletzungen und behält sich das Recht vor, Erziehungs- und Strafmaßnahmen im festgelegten Rahmen durchzuführen.' 
        }
      ]
    },
    {
      id: 'grenzen',
      name: 'Grenzen & Sicherheit',
      description: 'Gewährleistet den körperlichen und mentalen Schutz (SSC / RACK).',
      levels: [
        { 
          title: 'SSC-Basis', 
          description: 'Safe, Sane, Consensual mit unanfechtbarem Abbruchsignal.', 
          content: 'Alle Handlungen basieren auf Gegenseitigkeit und Konsens. Das vereinbarte Safeword führt zum unverzüglichen und kommentarlosen Abbruch jeder aktiven Handlung.' 
        },
        { 
          title: 'RACK & Nachsorge', 
          description: 'Integrierte Fürsorgepflicht und verbindliche Aftercare.', 
          content: 'Ergänzend zum Safeword verpflichten sich beide Parteien zur angemessenen emotionalen und physischen Nachsorge (Aftercare). Der Zustand der submissiven Person wird nach jeder Session aktiv überprüft.' 
        },
        { 
          title: 'Risikomanagement', 
          description: 'Lückenlose medizinische Vorsorge und regelmäßige Review-Gespräche.', 
          content: 'Gesundheitliche Risiken, Allergien und Notfalldaten sind schriftlich dokumentiert. Neben Abbruchsignalen werden regelmäßige Feedbackgespräche vereinbart, um Dynamik und Belastungsgrenzen kontinuierlich anzupassen.' 
        }
      ]
    },
    {
      id: 'diskretion',
      name: 'Diskretion & Datenschutz',
      description: 'Schützt die Privatsphäre und regelt den Umgang mit Bild- und Videomaterial.',
      levels: [
        { 
          title: 'Absolute Vertraulichkeit', 
          description: 'Stillschweigen gegenüber allen Außenstehenden.', 
          content: 'Sämtliche Details dieses Verhältnisses, persönliche Informationen sowie der Inhalt dieser Vereinbarung bleiben gegenüber Dritten streng geheim.' 
        },
        { 
          title: 'Medien-Freigaben', 
          description: 'Aufnahmen nur nach ausdrücklicher Einwilligung.', 
          content: 'Foto-, Video- oder Tonaufnahmen dürfen ausschließlich nach vorheriger Zustimmung angefertigt werden. Jegliche Weitergabe oder Veröffentlichung ohne explizites Einverständnis ist untersagt.' 
        },
        { 
          title: 'Sichere Verwahrung & Löschung', 
          description: 'Verschlüsselte Speicherung und Löschpflicht bei Beendigung.', 
          content: 'Erstellte Medien werden auf geschützten bzw. verschlüsselten Datenträgern aufbewahrt. Bei Beendigung des Vertragsverhältnisses sind sämtliche Aufnahmen und Kopien unverzüglich und dauerhaft zu löschen.' 
        }
      ]
    }
  ],
  optionalSections: {
    tabu: '**Tabus und Grenzen (Hard & Soft Limits)**\n\nHarte Grenzen (Absolute Tabus):\n________________________________________________________________\n\nWeiche Grenzen (Nur nach vorheriger Absprache):\n________________________________________________________________\n\nGesundheitliche Hinweise / Allergien / Einschränkungen:\n________________________________________________________________',
    safeword: '**Safewort und Notfallregelung**\n\nSafewort (Sofortiger Stopp): ____________________\nNon-verbales Abbruchsignal: ____________________\n\nAmpelsystem:\n- GRÜN: Handlung ist angenehm / ok.\n- GELB: Belastungsgrenze erreicht, Aufmerksamkeit oder Verlangsamung erforderlich.\n- ROT: Sofortiger Abbruch aller Handlungen ohne Diskussion.',
    customRules: '**Zusätzliche Vereinbarungen & Ausnahmen**\n\n________________________________________________________________\n________________________________________________________________\n________________________________________________________________'
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

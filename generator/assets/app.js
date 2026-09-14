const STORAGE_SCHEMA_VERSION = 2;

const contractData = {
  introductions: {
    male: 'Dieser Vertrag wird von beiden Vertragsparteien freiwillig geschlossen und akzeptiert. Beide Vertragspartner entscheiden sich bewusst zur strengen und konsequenten Einhaltung dieses Vertrages. Der Herr kann jederzeit auf Einhaltung dieses Vertrages mit allen vereinbarten Konsequenzen bestehen.',
    female: 'Dieser Vertrag wird von beiden Vertragsparteien freiwillig geschlossen und akzeptiert. Beide Vertragspartner entscheiden sich bewusst zur strengen und konsequenten Einhaltung dieses Vertrages. Die Herrin kann jederzeit auf Einhaltung dieses Vertrages mit allen vereinbarten Konsequenzen bestehen.'
  },
  categories: [
    {
      id: 'allgemein',
      name: 'Allgemeine Regeln',
      description: 'Grundlegende Regeln und Vereinbarungen für den Vertrag',
      levels: [
        {
          title: 'Stufe 1 (Basis)',
          description: 'Grundlegende Demut und Verhaltensregeln.',
          content: 'Der/Die Sklave/Sklavin ist gegenüber dem Herrn/der Herrin stets demütig und steht ihm/ihr mit seinem/ihrem Körper und Geist zur Verfügung. Die Befehle sind strikt zu befolgen.\n\nDem/Der Sklaven/Sklavin ist es untersagt, ohne Erlaubnis zum Orgasmus zu kommen.\n\nDer/Die Sklave/Sklavin hat auf alle gestellten Fragen ehrlich, in einem respektvollen ruhigen Tonfall und direkt zu antworten und darf dem Herrn/der Herrin nie widersprechen.'
        },
        {
          title: 'Stufe 2 (Erweitert)',
          description: 'Körperpflege und Anredeformen.',
          content: 'Der/Die Sklave/Sklavin hat den Körper sorgsam zu pflegen und täglich von sämtlichen Körperhaaren zu befreien.\n\nDer/Die Sklave/Sklavin wird mit gesenktem Kopf und mit "Herr/Herrin" die dominante Person demütigst ansprechen sowie jeden Satz mit „Ja Herr/Herrin" beenden.\n\nEs ist strengstens verboten, die Worte „du, nein, später, schimpf-/beleidigende" oder ähnliche Worte zu benutzen.'
        },
        {
          title: 'Stufe 3 (Intensiv)',
          description: 'Vollständige Reduzierung persönlicher Bedürfnisse.',
          content: 'Der/Die Sklave/Sklavin verpflichtet sich, alle persönlichen Ansichten, Wünsche, Bedürfnisse und Kritiken auf das absolut unumgängliche Maß zu reduzieren und übernimmt die Wertvorstellungen der dominanten Person.\n\nDer/Die Sklave/Sklavin gibt das Recht auf einen Vor- und Nachnamen auf und wird nur noch mit der Sklaven-Nummer oder einem zugeteilten Namen angesprochen.\n\nZiel ist es, ein absolut höriges, untergebenes Objekt zu formen, dessen Leben nur darin besteht, sich um das Wohlergehen des Herrn/der Herrin zu kümmern.'
        }
      ]
    },
    {
      id: 'gehorsam',
      name: 'Gehorsam und Unterwerfung',
      description: 'Hierarchie und Verhaltensregeln',
      levels: [
        {
          title: 'Stufe 1 (Basis)',
          description: 'Widerspruchsloser Dienst.',
          content: 'Der/Die Sklave/Sklavin wird seine/ihre Dienste in angemessener Art zur Verfügung stellen und stets sein/ihr Bestes geben. Anordnungen ist unverzüglich und widerspruchslos Folge zu leisten.\n\nGefühlsregungen wie Weinen, Schreien oder Betteln haben keinen Einfluss auf die Behandlung.'
        },
        {
          title: 'Stufe 2 (Erweitert)',
          description: 'Körperhaltung und Blickkontakt.',
          content: 'Der/Die Sklave/Sklavin hält sich bedingungslos an alle Regeln und ist sich bewusst, dass jeder Regelbruch bestraft wird.\n\nIn Anwesenheit des Herrn/der Herrin befindet sich der/die Sklave/Sklavin auf den Knien, sofern keine Aufgabe das Stehen erfordert. Die Augen sind stets gesenkt, sodass nur auf die Füße geschaut wird.'
        },
        {
          title: 'Stufe 3 (Intensiv)',
          description: 'Strenges Demutsprotokoll.',
          content: 'Der/Die Sklave/Sklavin bemüht sich, vorausschauend zu dienen und schweigt, wenn er/sie nicht angesprochen wird.\n\nBeim Betreten des Raumes durch den Herrn/die Herrin fällt der/die Sklave/Sklavin auf die Knie, küsst die Füße und verharre in kniender Position mit gesenktem Blick, bis Bewegung wieder gestattet wird.'
        }
      ]
    },
    {
      id: 'kleidung',
      name: 'Kleidung und Erscheinungsbild',
      description: 'Regeln zur Kleidung und zum äußeren Erscheinungsbild',
      levels: [
        {
          title: 'Stufe 1 (Basis)',
          description: 'Bestimmungsrecht über Bekleidung.',
          content: 'Der Herr/Die Herrin kann jederzeit über Kleidung, Schmuck und Make-up entscheiden, soweit dies mit dem Arbeitsplatz vereinbar ist.\n\nAuf Anordnung hat der/die Sklave/Sklavin jederzeit einzelne Kleidungsstücke abzulegen oder sich komplett nackt zu präsentieren.'
        },
        {
          title: 'Stufe 2 (Erweitert)',
          description: 'Nacktheit und Fesseln im privaten Bereich.',
          content: 'Der natürliche Zustand in Anwesenheit des Herrn/der Herrin ist Nacktheit. Ohne anderslautende Anordnung ist in der Wohnung komplett nackt zu sein.\n\nDas Tragen von Halsbändern, Hand- und Fußfesseln sowie Vorgaben zu Haar- und Nagellänge können angeordnet werden.'
        },
        {
          title: 'Stufe 3 (Intensiv)',
          description: 'Strenge Kleiderordnung und Registrierungsnummer.',
          content: 'Bei Abwesenheit gilt eine strenge Kleiderordnung laut Anhang. Beim Sport im öffentlichen Raum wird enganliegende Kleidung getragen.\n\nDer/Die Sklave/Sklavin trägt auf Bestimmung die internationale Sklavenregistrierungsnummer im Nacken und auf dem Gesäß tätowiert.'
        }
      ]
    },
    {
      id: 'disziplin',
      name: 'Bestrafung und Disziplin',
      description: 'Regeln zu Bestrafungsmethoden und Disziplinarmaßnahmen',
      levels: [
        {
          title: 'Stufe 1 (Basis)',
          description: 'Erziehungsrecht und Bestrafungsakzeptanz.',
          content: 'Der Herr/Die Herrin kann Verfehlungen nach Ermessen bestrafen. Kritik am Strafmaß ist untersagt.\n\nEs besteht ein Erziehungsrecht; Ermahnungen, Züchtigungen und Erniedrigungen sind zulässige Mittel der Erziehung.'
        },
        {
          title: 'Stufe 2 (Erweitert)',
          description: 'Schmerzskala und Dankbarkeitsbezeugung.',
          content: 'Der/Die Sklave/Sklavin unterwirft sich klaglos allen Zuchtmaßnahmen. Der Schmerzgrad ist auf Aufforderung von 1 bis 10 zu definieren, um die Belastbarkeit zu ermitteln.\n\nNach der Bestrafung vollzieht der/die Sklave/Sklavin zwei kniende Verbeugungen, kriecht nach vorne und küsst die Füße.'
        },
        {
          title: 'Stufe 3 (Intensiv)',
          description: 'Uneingeschränkte Züchtigung.',
          content: 'Der Herr/Die Herrin kann den/die Sklaven/Sklavin zum Lustgewinn in jeder erdenklichen Weise züchtigen und Schmerzen zufügen.\n\nWährend der Züchtigung dürfen keine Laute von sich gegeben werden (Knebelung droht); leises Jammern und Weinen ist erlaubt. Ausreden werden nicht geduldet.'
        }
      ]
    },
    {
      id: 'sexualitaet',
      name: 'Sexualität',
      description: 'Regeln und Vereinbarungen zu sexuellen Handlungen',
      levels: [
        {
          title: 'Stufe 1 (Basis)',
          description: 'Verzicht auf sexuelle Selbstbestimmung.',
          content: 'Das Recht auf sexuelle Selbstbestimmung wird an die dominante Person abgetreten. Das Berühren des eigenen Intimbereichs ist ohne Aufforderung verboten.\n\nSexueller Kontakt zu Dritten ist ohne Anweisung untersagt.'
        },
        {
          title: 'Stufe 2 (Erweitert)',
          description: 'Ständige Verfügbarkeit.',
          content: 'Die dominante Person ist jederzeit berechtigt, sexuelle Handlungen vorzunehmen oder zu verlangen. Der/Die Sklave/Sklavin hat sich ständig bereitzuhalten; Verweigerung ist untersagt.\n\nSelbstbefriedigung erfolgt nur auf Anordnung. Ein Recht auf eigene sexuelle Befriedigung besteht nicht.'
        },
        {
          title: 'Stufe 3 (Intensiv)',
          description: 'Keuschheit und Oraldienst.',
          content: 'Zur Vermeidung eigener Lust wird grundsätzlich ein Keuschheitsgürtel (ggf. mit Ass Lock) getragen.\n\nDer/Die Sklave/Sklavin ist zu jeder sexuellen Knechtschaft gegenüber der dominanten Person oder Dritten verpflichtet und hat auf Verlangen den Intimbereich mit der Zunge zu reinigen.'
        }
      ]
    },
    {
      id: 'freiheit',
      name: 'Freiheitsentzug',
      description: 'Vereinbarungen zu Einschränkung der Bewegungsfreiheit',
      levels: [
        {
          title: 'Stufe 1 (Basis)',
          description: 'Freiheitsentzug während der Spielzeit.',
          content: 'Während der Spielzeit werden Freiheitsrechte aufgegeben (Fesselung, Fixierung, Anketten).\n\nKnebelung sowie das Verbinden von Augen und Ohren sind zulässig.'
        },
        {
          title: 'Stufe 2 (Erweitert)',
          description: 'Einsperren und Isolation.',
          content: 'Der/Die Sklave/Sklavin kann jederzeit uneingeschränkt eingesperrt (Käfig, Blackbox, Zelle), gefesselt oder über Nacht in Ketten gelegt werden.\n\nKritik oder Betteln führt zur sofortigen Verschärfung der Maßnahmen.'
        },
        {
          title: 'Stufe 3 (Intensiv)',
          description: 'Elektronische Überwachung & Kontrolle.',
          content: 'Anlegen einer elektronischen Fußfessel oder eines Schockhalsbands ist zulässig. Bei Fluchtversuchen oder Fehlverhalten dürfen Stromstöße ausgelöst werden.\n\nBewegung außerhalb des Hauses bedarf der Genehmigung. Der Zugang zu Medien und Elektronik ist ohne Erlaubnis untersagt.'
        }
      ]
    },
    {
      id: 'koerper',
      name: 'Körpermodifikation',
      description: 'Vereinbarungen zu temporären oder permanenten Körperveränderungen',
      levels: [
        {
          title: 'Stufe 1 (Basis)',
          description: 'Körperpflege und Haarlänge.',
          content: 'Verpflichtung zu intensiver Körperpflege und täglicher Ganzkörperrasur.\n\nFarbe und Länge von Haupthaar und Nägeln werden von der dominanten Person bestimmt.'
        },
        {
          title: 'Stufe 2 (Erweitert)',
          description: 'Piercings, Frisur und dauerhafter Schmuck.',
          content: 'Alleiniges Bestimmungsrecht über das Äußere (inkl. Glatze, Piercings und Schmuck).\n\nFolgendes wird dauerhaft getragen: Ein Edelstahlhalsband sowie Brustwarzenringe.'
        },
        {
          title: 'Stufe 3 (Intensiv)',
          description: 'Tattoos, Branding und Kennzeichnung.',
          content: 'Alleiniges Recht der dominanten Person über Tattoos, Narben, Piercings und Brandings zu entscheiden.\n\nDer/Die Sklave/Sklavin wird mit den Initialen gebrandet (jährliche Wiederholung am Geburtstag). Dauerhafte Kennzeichnungen können jederzeit angeordnet werden.'
        }
      ]
    }
  ],
  optionalSections: {
    tabu: '**Tabus und Grenzen (Hard & Soft Limits)**\n\nHarte Grenzen: ________________________________________________\nWeiche Grenzen: _______________________________________________\nGesundheitliche Hinweise: _____________________________________',
    safeword: '**Safewort und Notfallregelung**\n\nSafewort: ____________________\nAmpelsystem: Grün = ok, Gelb = langsamer/prüfen, Rot = sofortiger Stopp. Ein Stopp wird ohne Diskussion respektiert.',
    customRules: '**Zusätzliche Regeln und Vereinbarungen**\n\n________________________________________________________________\n________________________________________________________________'
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

const clauses = [
  {
    id: 'purpose',
    title: 'Zweck der Vereinbarung',
    text: 'Die Parteien halten ihre gemeinsamen Ziele, Erwartungen und Verantwortlichkeiten schriftlich fest. Änderungen erfolgen nur einvernehmlich.'
  },
  {
    id: 'consent',
    title: 'Einvernehmlichkeit',
    text: 'Alle Handlungen und Entscheidungen beruhen auf freiwilliger Zustimmung. Jede Partei kann Grenzen benennen und die Vereinbarung jederzeit neu verhandeln.'
  },
  {
    id: 'confidentiality',
    title: 'Vertraulichkeit',
    text: 'Persönliche Informationen, Inhalte und Dokumente werden vertraulich behandelt und nicht ohne ausdrückliche Zustimmung weitergegeben.'
  },
  {
    id: 'communication',
    title: 'Kommunikation',
    text: 'Die Parteien verpflichten sich zu respektvoller, klarer und zeitnaher Kommunikation, insbesondere bei Unklarheiten, Änderungen oder Problemen.'
  },
  {
    id: 'duration',
    title: 'Laufzeit und Kündigung',
    text: 'Die Vereinbarung gilt ab Unterzeichnung auf unbestimmte Zeit und kann von jeder Partei mit sofortiger Wirkung beendet werden.'
  },
  {
    id: 'signatures',
    title: 'Unterschriften',
    text: 'Mit der Unterzeichnung bestätigen beide Parteien, dass sie den Inhalt gelesen, verstanden und freiwillig akzeptiert haben.'
  }
];

const form = document.querySelector('#generator-form');
const clausesContainer = document.querySelector('#clauses');
const output = document.querySelector('#contract-output');
const status = document.querySelector('#status');

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(dateValue) {
  if (!dateValue) return '________________';
  const [year, month, day] = dateValue.split('-');
  return `${day}.${month}.${year}`;
}

function renderClauseControls() {
  clausesContainer.innerHTML = clauses.map((clause) => `
    <label class="clause-option">
      <input type="checkbox" name="clause" value="${clause.id}" checked>
      <span><strong>${clause.title}</strong>${clause.text}</span>
    </label>
  `).join('');
}

function formValue(data, key, fallback = '________________') {
  const value = String(data.get(key) || '').trim();
  return value || fallback;
}

function buildContract() {
  const data = new FormData(form);
  const selectedClauseIds = data.getAll('clause');
  const selectedClauses = clauses.filter((clause) => selectedClauseIds.includes(clause.id));
  const customTerms = formValue(data, 'customTerms', 'Keine zusätzlichen Vereinbarungen.');

  const sections = selectedClauses.map((clause, index) => `${index + 1}. ${clause.title}\n${clause.text}`).join('\n\n');

  return `${formValue(data, 'contractTitle')}\n\nDatum: ${formatDate(data.get('contractDate'))}\n\nZwischen\n${formValue(data, 'partyA')} (${formValue(data, 'roleA')})\n\nund\n${formValue(data, 'partyB')} (${formValue(data, 'roleB')})\n\nwird folgende Vereinbarung geschlossen:\n\n${sections}\n\n${selectedClauses.length + 1}. Zusätzliche Vereinbarungen\n${customTerms}\n\nOrt, Datum: ______________________________\n\nUnterschrift Partei A: ____________________\n\nUnterschrift Partei B: ____________________\n`;
}

function updatePreview() {
  output.value = buildContract();
  status.textContent = `aktualisiert ${new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}`;
}

function downloadText() {
  updatePreview();
  const blob = new Blob([output.value], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'vertrag.txt';
  link.click();
  URL.revokeObjectURL(url);
}

function printContract() {
  updatePreview();
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`<pre>${output.value.replace(/[&<>]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[char]))}</pre>`);
  printWindow.document.close();
  printWindow.print();
}

renderClauseControls();
form.elements.contractDate.value = todayIso();
updatePreview();

document.querySelector('#generate').addEventListener('click', updatePreview);
document.querySelector('#download').addEventListener('click', downloadText);
document.querySelector('#print').addEventListener('click', printContract);
form.addEventListener('input', updatePreview);
form.addEventListener('reset', () => setTimeout(() => {
  form.elements.contractDate.value = todayIso();
  updatePreview();
}));

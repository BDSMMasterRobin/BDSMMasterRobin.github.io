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
          content: 'Über das Spiel hinaus gelten festgelegte Verhaltens- und Dienstprotokolle (z. B. Anrede, Haltung, Aufgaben im Haushalt). Regelverstöße werden mit einvernehmlich festgelegten Disziplinierungsmaßnahmen geahndet.' 
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

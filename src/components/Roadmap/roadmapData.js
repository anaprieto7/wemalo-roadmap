// Datos mock para el roadmap. Luego esto se puede sustituir por la API de JIRA.
export const roadmapColumns = [
  {
    id: "backlog",
    title: "Backlog",
    color: "#7cb7f1ff",
    items: [
      {
        id: "item-1",
        title: "Teillieferungen - (1. Version: Multilabel-...)",
        description:
          "Erste Version für Teillieferungen mit Unterstützung für mehrere Labels pro Bestellung.",
        owner: "Max Mustermann",
        tag: { name: "Versand (Dienstleister)", color: "#22c55e" },
        votes: 410,
      },
      {
        id: "item-2",
        title: "OSS: Steuersätze pro Land und Artikel",
        description:
          "Implementierung unterschiedlicher Steuersätze je Land und Artikel für OSS.",
        owner: "Lisa Müller",
        tag: { name: "Tax-Engine", color: "#facc15" },
        votes: 154,
      },
      {
        id: "item-3",
        title: "Billbee API 2.0",
        tag: { name: "Billbee-API", color: "#ef4444" },
        votes: 72,
      },
      {
        id: "item-4",
        title: "Zentraler Dokumentenstore",
        tag: { name: "Auftragsdokumente", color: "#6b7280" },
        votes: 42,
      },
    ],
  },
  {
    id: "planning",
    title: "In Planung",
    color: "#4b10b9ff",
    items: [
      {
        id: "item-5",
        title: "Bestellübersicht: Überarbeitung der …",
        tag: { name: "Bestellverwaltung", color: "#06b6d4" },
        votes: 173,
      },
      {
        id: "item-6",
        title: "Zahlungsabgleich: mehrere Rechnungen …",
        tag: { name: "Zahlungsabgleich", color: "#3b82f6" },
        votes: 43,
      },
    ],
  },
  {
    id: "development",
    title: "In Entwicklung",
    color: "#fbbf24",
    items: [
      {
        id: "item-7",
        title: "Netto Preise zzgl. MWST für B2B Bereich",
        tag: { name: "Tax-Engine", color: "#fbbf24" },
        votes: 324,
      },
      {
        id: "item-8",
        title: "Berichte: komplette Überarbeitung",
        tag: { name: "Berichtswesen", color: "#fb923c" },
        votes: 246,
      },
      {
        id: "item-9",
        title: "Retourenlabel erzeugen aber nicht drucken",
        tag: { name: "Versand", color: "#22c55e" },
        votes: 37,
      },
    ],
  },
  {
    id: "testing",
    title: "Im Test",
    color: "#2116f9ff",
    items: [],
  },
  {
    id: "ready",
    title: "Bereit für Release",
    color: "#22c55e",
    items: [
      {
        id: "item-10",
        title: "Shopify: Zahlart Klarna über Shopify Payments …",
        tag: { name: "Bugfix", color: "#f97316" },
        votes: 5,
      },
    ],
  },
  {
    id: "pilot",
    title: "Pilot-Projekt",
    color: "#a855f7",
    items: [
      {
        id: "item-11",
        title: "Tiktok Shop Anbindung",
        tag: { name: "Marktplätze", color: "#14b8a6" },
        votes: 52,
      },
    ],
  },
];

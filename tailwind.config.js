/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
  colors: {
    // 🌿 Verde principal - Wemalo Brand
    emerald: {
      50:  "#e6f7f2",
      100: "#c2eee0",
      200: "#9de3cd",
      300: "#72d6b8",
      400: "#48caa2",
      500: "#1ebf8d",
      600: "#009E7F",   
      700: "#00846B",
      800: "#006B58",
      900: "#004E40",
    },

    // 🧡 Naranja de acento (para botones, highlights, warnings)
    orange: {
      50:  "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#eb7c0eff",  // Acento WEMALO
      600: "#D97706",
      700: "#B45309",
      800: "#92400E",
      900: "#78350F",
    },

    // 💙 Azul de soporte (links, secondary actions)
    blue: {
      50:  "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3B82F6",
      600: "#2563EB",
      700: "#1D4ED8",
      800: "#1E40AF",
      900: "#070f24ff",
    },

    // 🌫️ Grises neutros para UI
    slate: {
      50:  "#F8F8FB",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },

    // ⚫ Tonos neutros oscuros (para dark mode)
    gray: {
      50:  "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
    },

    // 💛 Amarillo (para alerts o estados de test)
    yellow: {
      50:  "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#ED8517",
      600: "#CA8A04",
      700: "#A16207",
      800: "#854D0E",
      900: "#713F12",
    },

    // 💜 Morado (para proyectos piloto o categorías especiales)
    purple: {
      50:  "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#A855F7",
      600: "#9333EA",
      700: "#7E22CE",
      800: "#6B21A8",
      900: "#581C87",
    },

    // 🔵 Cian (para acciones informativas o tags tipo “Info”)
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
    },
  },
}

  },
  plugins: [],
};

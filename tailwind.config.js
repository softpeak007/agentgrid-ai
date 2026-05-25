/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#07070a",
          card: "rgba(13, 13, 18, 0.75)",
          cyan: "#00f0ff",
          purple: "#9d4edd",
          green: "#39ff14",
          pink: "#ff007f",
          yellow: "#ffcc00",
          text: "#e2e8f0",
          muted: "#64748b",
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-cyan-pulse': 'glow-cyan-pulse 2.5s infinite alternate',
      },
      keyframes: {
        'glow-cyan-pulse': {
          '0%': { boxShadow: '0 0 4px rgba(0, 240, 255, 0.2), inset 0 0 4px rgba(0, 240, 255, 0.1)' },
          '100%': { boxShadow: '0 0 16px rgba(0, 240, 255, 0.6), inset 0 0 8px rgba(0, 240, 255, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}

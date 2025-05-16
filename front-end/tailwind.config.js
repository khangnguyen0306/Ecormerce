/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: { // Refined gold palette
          50: '#FEFBF3', // Lighter, softer gold tones
          100: '#FDF5E1',
          200: '#FCEBCF',
          300: '#F9E0B8',
          400: '#F5D29A',
          500: '#EEC47D', // Main accent gold
          600: '#D9A657', // Primary Gold for key elements
          700: '#C08B40', // Darker Gold for depth
          800: '#A7712A',
          900: '#8E5715',
        },
        cream: {
          50: '#FFFCF5', // Very light cream
          100: '#FAF7F2', // Light cream (as before)
          200: '#F5F0E9', // Cream (as before)
        },
        neutral: { // Softer neutral tones
          900: '#2C2A29', // Softer black
          800: '#423F3D',
          700: '#595552',
          600: '#706B67',
          500: '#8C8681',
          400: '#A9A39E',
          300: '#C7C2BD',
        }
      },
      borderRadius: {
        lg: "var(--radius)", // 0.75rem from :root
        md: "calc(var(--radius) - 0.25rem)", // 0.5rem
        sm: "calc(var(--radius) - 0.375rem)", // 0.375rem
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'], // Default sans-serif
        serif: ['Playfair Display', 'serif'], // Default serif
        heading: ['Playfair Display', 'serif'], // Specific for headings
        body: ['Lato', 'sans-serif'], // Specific for body text
        cormorant: ['Cormorant Garamond', 'serif'], 
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
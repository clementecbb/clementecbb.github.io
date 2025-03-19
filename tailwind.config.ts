/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Asegura que use la clase "dark"
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  
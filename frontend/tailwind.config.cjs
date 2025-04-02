/** @type {import('tailwindcss').Config} */
//import plugin from 'tailwindcss/plugin';

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};
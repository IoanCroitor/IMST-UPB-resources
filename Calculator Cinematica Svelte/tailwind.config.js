/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: '#dcdbf5',
				utext: '#cfcffe',
				background: '#060618',
				primary: '#9699e4',
				secondary: '#7a2183',
				accent: '#cf44a3',
				terminal: '#1A1B26'
			}
		}
	},
	plugins: []
};

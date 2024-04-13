/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#DCCFEC',
				secondary: '#DDC4DD',
				tertiary: '#A997DF',
				background: '#1E212B',
				accent: '#FAA916',
				foreground: '#1A1B26'
			}
		}
	},
	plugins: []
};

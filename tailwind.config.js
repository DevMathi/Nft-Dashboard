/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		backgroundImage: {
			'card-background': 'url("../src/assets/card-imgs/discover.svg")',
			'cover-card-background': "url('../src/assets/card-imgs/cover.svg')",
		},
		fontFamily: {
			poppins: ['Poppins'],
		},
		transitionProperty: {
			spacing: 'padding',
		},
		extend: {
			dropShadow: {
				input: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
			},
			colors: {
				'dark-blue': '#131129',
				'placeholder-input': '#68676E',
				'elements-bg': '#1D1932',
				white: '#FFFFFF',
				'purple-button': '#6F4FF2',
				'red-button': '#DC3546',
				'blue-light': '#6C7AA0',
			},
			screens: {
				SmartphonesG: '369px',
			},
		},
	},
	plugins: [],
};

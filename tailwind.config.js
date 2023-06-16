/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		backgroundImage: {
			'card-background': 'url("../src/assets/card-imgs/discovermob.svg")',
			'cover-card-background': "url('../src/assets/card-imgs/covermob.svg')",
			'card-background-desk': "url('../src/assets/card-imgs/discoverdesk.svg')",
			'cover-card-background-desk':
				"url('../src/assets/card-imgs/coverdesk.svg')",
		},
		screens: {
			tb: '426px',
			sm: '768px',
			lg: '1024px',
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
				'bg-white': '#BCBCBC',
				'dark-blue': '#131129',
				'placeholder-input': '#68676E',
				'elements-bg': '#1D1932',
				white: '#FFFFFF',
				'purple-button': '#6F4FF2',
				'red-button': '#DC3546',
				'blue-light': '#6C7AA0',
				'bids-green': '#50BB25',
				'bids-yellow': '#F9D62C',
				'border-color': '#D6DBDE',
				'bids-red': '#DC3546',
				'bg-avatar': '#302CD7',
				'white-body': '#',
			},
			screens: {
				SmartphonesG: '369px',
			},
			zIndex: {
				1: '1',
			},
			transitionProperty: {
				left: 'left',
			},
		},
	},
	plugins: [],
};

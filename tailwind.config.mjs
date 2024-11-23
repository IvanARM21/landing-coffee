/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: "375px",
			md: "776px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1560px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: ".5rem",
				sm: "1rem",
				md: "2rem",
				lg: "4rem",
				xl: "6rem",
				"2xl": "8rem"
			},
		},
		extend: {
			fontFamily: {
				"heading": "Galada",
				"body": "Urbanist"
			},
			colors: {
				primary: {
					'50': '#f9f6ed',
					'100': '#f1e9d0',
					'200': '#e4d3a4',
					'300': '#d4b570',
					'400': '#c79a48',
					'500': '#b8863a',
					'600': '#9e6a30',
					'700': '#7f4f29',
					'800': '#6a4129',
					'900': '#4b2e20',
					'950': '#351d13',
				},
			}
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern":
					"linear-gradient(0deg, rgba(225,225,225,0.5) 0%, rgba(225,225,225,0.5) 100%), url('https://media.blogto.com/uploads/2017/07/14/20170714-oneeighty.jpg?cmd=resize&quality=70&w=1400&height=2500')",
				// "linear-gradient(158deg, rgba(222,249,250,0.5) -43.27%, rgba(222,249,250,0.5) -43.27%, rgba(190,243,245,0.5) -21.24%, rgba(157,237,240,0.5) 12.19%, rgba(125,231,235,0.5) 29.82%, rgba(92,225,230,0.5) 51.94%, rgba(51,187,207,0.75) 90.29%), url('https://media.blogto.com/uploads/2017/07/14/20170714-oneeighty.jpg?cmd=resize&quality=70&w=1400&height=2500')",
			},
		},
	},
	plugins: [],
}

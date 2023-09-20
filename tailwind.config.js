/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./site/**/*.{html,js}',
	],
	theme: {
		extend:{
			colors: {
				DarkText: "hsl(229, 25%, 31%)",
				ScoreText: "hsl(229, 64%, 46%)",
				HeaderOutline: "hsl(217, 16%, 45%)",
				// ? background
				transparentColor: "rgb(15 23 42 / 80%)",
				// ? gradiants
				RadialGradientFrom: "hsl(214, 47%, 23%)",
				RadialGradientTo: "hsl(237, 49%, 15%)",
				ScissorsGradientFrom: "hsl(39, 89%, 49%)",
				ScissorsGradientTo: "hsl(40, 84%, 53%)",
				PaperGradientFrom: "hsl(230, 89%, 62%)",
				PaperGradientTo: "hsl(230, 89%, 65%)",
				RockGradientFrom: "hsl(349, 71%, 52%)",
				RockGradientTo: "hsl(349, 70%, 56%)",
				LizardGradientFrom: "hsl(261, 73%, 60%)",
				LizardGradientTo: "hsl(261, 72%, 63%)",
				CyanFrom: "hsl(189, 59%, 53%)",
				CyanTo: "hsl(189, 58%, 57%)"
			},
			fontFamily: {
				body: ['Barlow Semi Condensed'],
			},
			borderWidth: {
				'desktop': '25px',
				'mobile': '15px'
			},
			height: {
				'mobile-header': 'calc(100vh - 11rem - 4rem)',
				'desktop-header': 'calc(100vh - 20rem - 4rem)',
			},
			width: {
				'game-mobile': '90%',
				'game-tablet': '42rem',
			}
		}
	}
}

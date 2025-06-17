// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	// darkMode: ["class"],
// 	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
// 	darkMode: 'class', 
// 	theme: {
// 		extend: {
// 			borderRadius: {
// 				lg: 'var(--radius)',
// 				md: 'calc(var(--radius) - 2px)',
// 				sm: 'calc(var(--radius) - 4px)'
// 			},
// 			colors: {},
// 			keyframes: {
// 				'accordion-down': {
// 					from: {
// 						height: '0'
// 					},
// 					to: {
// 						height: 'var(--radix-accordion-content-height)'
// 					}
// 				},
// 				'accordion-up': {
// 					from: {
// 						height: 'var(--radix-accordion-content-height)'
// 					},
// 					to: {
// 						height: '0'
// 					}
// 				}
// 			},
// 			animation: {
// 				'accordion-down': 'accordion-down 0.2s ease-out',
// 				'accordion-up': 'accordion-up 0.2s ease-out'
// 			}
// 		}
// 	},
// 	plugins: [require("tailwindcss-animate")],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	darkMode: 'class',
	theme: {
	  extend: {
		fontFamily: {
		  nunito: ['"Nunito"', 'sans-serif'],
		  merriweather: ['"Merriweather"', 'serif'],
		  dancing: ['"Dancing Script"', 'cursive'],
		  playfair: ['"Playfair Display"', 'serif'],
		  ibm: ['"IBM Plex Serif"', 'serif'],
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {
		  // Custom colors (optional)
		},
		keyframes: {
		  'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		  },
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  
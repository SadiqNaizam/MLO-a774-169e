import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"], // Kept darkMode configuration, but actual dark theme styles removed from CSS as PRD does not define them
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        /* Custom color for PRD sidebar background */
        sidebar: {
          DEFAULT: 'hsl(var(--app-sidebar-bg))',
          /* For text on sidebar, use primary 'foreground' or 'muted-foreground' as needed */
          /* e.g., text-foreground or text-muted-foreground */
        },
        /* Custom color for PRD secondaryText (e.g., for subheadings) */
        /* PRD secondaryText (#606770) is mapped to --muted-foreground */
        secondaryText: 'hsl(var(--muted-foreground))'
			},
			borderRadius: {
        /* PRD default is 'rounded-md' (0.375rem). CSS var --radius is set to 0.375rem. */
        /* This configuration means 'rounded-lg' will effectively be the PRD's default 'rounded-md'. */
				lg: 'var(--radius)', 
				md: 'calc(var(--radius) - 2px)', 
				sm: 'calc(var(--radius) - 4px)'
			},
      fontFamily: {
        /* PRD primaryFont: "Arial, sans-serif". CSS var --font-sans is set to this. */
        sans: ['var(--font-sans)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        /* PRD effects.shadows.default: "shadow-sm". Tailwind's 'shadow-sm' is '0 1px 2px 0 rgb(0 0 0 / 0.05)' */
        DEFAULT: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)', // ensure 'shadow-sm' utility class value is explicit
      },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

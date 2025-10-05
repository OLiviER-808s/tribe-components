export default {
	content: [
		'./src/**/*.{vue,js,ts}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			maxHeight: {
				'112': '28rem'
			},
			maxWidth: {
				'2/5': '40%',
				'3/5': '60%'
			},
			opacity: {
				35: '0.35'
			},
			borderWidth: {
				3: '3px',
			},
			colors: {
				'primary': 'rgba(var(--primary-color), 1)',
				'secondary': 'rgba(var(--secondary-color), 1)',
				'accent': 'rgba(var(--accent-color), 1)',

				'error': 'rgba(var(--error-color), 1)',
				'success': 'rgba(var(--success-color), 1)',

				'base': 'rgba(var(--base-bg-color), 1)',
				'card': 'rgba(var(--card-color), 1)',
				'card-accent': 'rgba(var(--card-color-accent), 1)',
				'border': 'rgba(var(--border-color), 1)',
				'message': 'rgba(var(--message-color), 1)',
				'dropdown': 'rgba(var(--dropdown-color), 1)',
				'dropdown-select': 'rgba(var(--dropdown-select-color), 1)',
				'quick-filter': 'rgba(var(--quick-filter-bg-color), 1)',
				'quick-filter-selected': 'rgba(var(--quick-filter-selected-bg-color), 1)',

				'base-text': 'rgba(var(--base-text-color), 1)',
				'secondary-text': 'rgba(var(--secondary-text-color), 1)',
				'dropdown-text': 'rgba(var(--dropdown-text-color), 1)',
			}
		}
	},
	safelist: [
		'text-xs',
		'text-sm',
		'text-md',
		'text-lg',
		'text-xl',
		{
			pattern: /(bg|text|border)-(primary|secondary|accent|error|success|base|secondary-text|back|white)/,
			variants: ['hover']
		},
		{
			pattern: new RegExp('(bg|text|border)-(primary|secondary|accent|error|success|base|secondary-text|back|white)/(10|20|30|35|40|50|60|70|80|90)'),
			variants: ['hover']
		},
		{
			pattern: /rounded-(sm|md|lg|xl|full)/
		},
		{
			pattern: /grid-cols-([1234])/
		}
	]
}
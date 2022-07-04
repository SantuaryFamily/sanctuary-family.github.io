import { NavigationItem } from './Item'

export const config: Array<NavigationItem> = [
	{ title: 'Home', to: '/' },
	{
		title: 'Raids',
		to: '/raid',
		children: [
			{ title: 'Assignments', to: '/raid' },
			{ title: 'Maps', to: '/maps' },
		],
	},
]

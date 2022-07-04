import { NavigationItem } from './Item'

export const config: Array<NavigationItem> = [
	{ title: 'Home', to: '/' },
	{
		title: 'Raids',
		to: 'raid/assignments',
		children: [
			{ title: 'Assignments', to: 'raid/assignments' },
			{ title: 'Maps', to: 'raid/maps' },
		],
	},
]

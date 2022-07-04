export type Route = '/' | 'raid/assignments' | 'raid/maps'

export type NavigationItem = LinkItem & {
	children?: Array<LinkItem>
	icon?: string
}

export type LinkItem = {
	to: Route
	title: string
}

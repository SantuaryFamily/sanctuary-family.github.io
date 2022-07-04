export type NavigationItem = LinkItem & {
	children?: Array<LinkItem>
	icon?: string
}

export type LinkItem = {
	to: string
	title: string
}

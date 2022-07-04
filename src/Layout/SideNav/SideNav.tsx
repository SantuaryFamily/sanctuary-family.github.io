import { Link } from 'react-router-dom'

import { config, LinkItem as LinkItemType, NavigationItem } from '../../navigation'
import { useMemo } from 'react'
import './sidenav.scss'

export const SideNav = () => {
	const items = useMemo(() => config.map((item) => <NavItem key={item.title} {...item} />), [])

	return (
		<nav className={'sidenav'}>
			<ul className={'sidenav-buttons'}>{items}</ul>
		</nav>
	)
}

const NavItem = ({ children, ...rest }: NavigationItem) => {
	if (!children) {
		return <LinkItem {...rest} dot={true} />
	} else {
		return (
			<li>
				<Dot />
				{rest.title}
				<ul className='hidden'>
					{children.map((child) => (
						<LinkItem dot={false} key={child.title} {...child} />
					))}
				</ul>
			</li>
		)
	}
}

type LinkItemProps = {
	dot: boolean
}
const LinkItem = ({ to, title, dot }: LinkItemType & LinkItemProps) => {
	return (
		<Link to={to}>
			<li className={!dot ? 'child' : undefined}>
				{dot && <Dot />}
				{title}
			</li>
		</Link>
	)
}

const Dot = () => <i className='fa fa-circle fa-2x' />

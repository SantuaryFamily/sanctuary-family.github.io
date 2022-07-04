import { Outlet } from 'react-router-dom'
import { SideNav } from './SideNav'
import styles from './layout.module.scss'

export const Layout = () => {
	return (
		<div className={styles['layout-container']}>
			<div className={styles['nav-container']}>
				<SideNav />
			</div>
			<div className={styles['content-container']}>
				<Outlet />
			</div>
		</div>
	)
}

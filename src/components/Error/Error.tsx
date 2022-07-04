import styles from './error.module.scss'

export const Error = ({ children }: { children: any }) => {
	console.log(children)
	return <span className={styles.error}>{children}</span>
}

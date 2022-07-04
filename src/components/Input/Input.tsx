import { Field, FieldAttributes } from 'formik'
import styles from './input.module.scss'

interface Props extends FieldAttributes<any> {
	htmlFor: string
	label: string
	placeholder?: string
	required?: boolean
	error?: string
}

export const Input = ({ htmlFor, label, placeholder, required, error, value, ...rest }: Props): JSX.Element => {
	const fieldClass = `${styles.input} ${value && styles['has-value']}`
	const labelClass = `${styles.placeholder} ${error && styles.error}`

	return (
		<div className={styles['input-container']}>
			<Field type='text' id={htmlFor} name={htmlFor} className={fieldClass} required={required} {...rest} />
			<label className={labelClass} htmlFor={htmlFor}>
				{error ? error : placeholder || label}
			</label>
		</div>
	)
}

// export

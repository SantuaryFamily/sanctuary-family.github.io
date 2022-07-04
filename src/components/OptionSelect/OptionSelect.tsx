import styles from './optionSelect.module.scss'

interface Props {
	options: string[]
	value: string
	onChange: (value: string) => void
}

export const OptionSelect = ({ options, value, onChange }: Props) => {
	const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(target.value)
	}

	return (
		<div>
			<span className={styles['label']}>Select a Clan</span>
			<br />
			<select className={styles['options-container']} id={value} value={value} onChange={handleChange}>
				{options.map((o, i) => (
					<option value={o} selected={o === options[i]}>
						{o}
					</option>
				))}
			</select>
		</div>
	)
}

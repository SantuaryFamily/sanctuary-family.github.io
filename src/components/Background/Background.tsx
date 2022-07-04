import style from './background.module.scss'

type Props = {
	darken?: boolean
}

export const Background = ({ darken = false }: Props) => {
	return (
		<>
			<div className={style['background']} />
			{darken && <div className={style['overlay']} />}
		</>
	)
}

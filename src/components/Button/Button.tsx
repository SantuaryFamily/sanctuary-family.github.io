import React, { useState } from 'react'
import './button.scss'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button = ({ type = 'submit', children, ...props }: Props) => {
	return (
		<button type={type} {...props}>
			{children}
		</button>
	)
	// return <button type={type} {...props} />
}

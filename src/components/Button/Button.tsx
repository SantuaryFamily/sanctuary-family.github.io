import React, { useState } from 'react'
import './button.scss'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button = ({ type = 'submit', children, ...props }: Props) => {
	return (
		<button type={type} {...props}>
			<p id='btnText'>{children}</p>
			<div className='check-box'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
					<path fill='transparent' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
				</svg>
			</div>
		</button>
	)
	// return <button type={type} {...props} />
}

import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import './welcome.scss'

export const Welcome = () => {
	return (
		<div className='welcome'>
			<Link to='/'>
				<h1>Welcome to Sanctuary Family</h1>
			</Link>
			<p>
				We are a collection of clans on Age of Magic, a mobile game developed by{' '}
				<a href='https://en.playkot.com/'>Playkot.</a>
			</p>
			<br />
			<p>
				This website exists for the use of all clans associated with the Sanctuary Family and allows our members
				to manage their raid lane assignments.
			</p>

			<Logo size={600} color={'#a52800'} />
		</div>
	)
}

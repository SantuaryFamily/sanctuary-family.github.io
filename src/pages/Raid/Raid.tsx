import { useState } from 'react'
import { Container, Row } from 'react-grid-system'
import { Formik, Form } from 'formik'
import './raid.scss'
import { RaidTeams, TeamLanes } from './components/TeamInputs'
import { Button, Error } from '../../components'
import { raid } from '../../api'
import { TeamFields } from './components/TeamFields'

export const Raid = () => {
	const [error, setError] = useState<string | undefined>()
	const initialValues: RaidTeams = {
		team1: initialTeamValues,
		team2: initialTeamValues,
		team3: initialTeamValues,
	}

	return (
		<div className='raids'>
			<h1>Lane Assignments</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					actions.setSubmitting(true)
					const hasValue = validate(values)
					if (hasValue) {
						raid.magic(values)
							.then((res) => {
								console.log('response', res)
								actions.resetForm()
							})
							.catch((err) => {
								console.log('error', err)
								setError(err?.response?.data?.message)
							})
							.finally(() => {
								actions.setSubmitting(false)
							})
					} else {
						setError('Please fill out all Lanes')
					}
				}}>
				{({ errors, values }) => (
					<Form>
						<Container>
							<Row>
								<TeamFields errors={errors} values={values} team='team1' />
								<TeamFields errors={errors} values={values} team='team2' />
								<TeamFields errors={errors} values={values} team='team3' />
							</Row>
							<Button>Send to Discord</Button>
							<br />
							{error && <Error>{error}</Error>}
						</Container>
					</Form>
				)}
			</Formik>
		</div>
	)
}

const validate = (values: RaidTeams) => {
	const test = Object.values(values).every((team) => Object.values(team).every((value) => value === ''))
	return !test
}

const initialTeamValues: TeamLanes = {
	lane1: '',
	lane2: '',
	lane3: '',
	lane4: '',
	lane5: '',
	lane6: '',
	lane7: '',
	lane8: '',
	lane9: '',
	lane10: '',
}

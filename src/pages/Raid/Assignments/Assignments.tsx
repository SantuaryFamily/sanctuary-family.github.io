import { useState } from 'react'
import { Container, Row } from 'react-grid-system'
import { Formik, Form, FormikHelpers } from 'formik'
import './assignments.scss'
import { RaidTeams, TeamLanes } from './components/TeamInputs'
import { Button, Error } from '../../../components'
import { raid } from '../../../api'
import { TeamFields } from './components/TeamFields'
import { OptionSelect } from '../../../components/OptionSelect/OptionSelect'
import { Clan, clans } from '../../../api/clanWebHooks'

export const Assignments = () => {
	const [error, setError] = useState<string | undefined>()
	const initialValues: RaidTeams = {
		team1: initialTeamValues,
		team2: initialTeamValues,
		team3: initialTeamValues,
	}

	const clansNames = Object.keys(clans) as Array<Clan>
	const [clan, setClan] = useState<Clan>(clansNames[0])

	const handleClanChange = (clan: string) => {
		setClan(clan as Clan)
	}

	const handleSubmit = async (values: RaidTeams, actions: FormikHelpers<RaidTeams>) => {
		actions.setSubmitting(true)
		const hasValue = validate(values)
		if (!hasValue) {
			setError('Please fill out all Lanes')
			return
		}
		raid.assign(clan, values)
			.then((res) => actions.resetForm())
			.catch((err) => setError(err?.response?.data?.message))
			.finally(() => actions.setSubmitting(false))
	}

	return (
		<div className='assignments'>
			<h1>Lane Assignments</h1>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				{({ errors, values }) => (
					<Form>
						<Container>
							<OptionSelect value={clan} options={clansNames} onChange={handleClanChange} />
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

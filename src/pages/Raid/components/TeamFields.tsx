import { FormikErrors } from 'formik'
import { Col } from 'react-grid-system'
import { toTitleCase } from '../../../utils'
import { RaidTeams, Team, TeamInputs } from './TeamInputs'

export type TeamFieldProps = {
	errors?: FormikErrors<RaidTeams>
	values: RaidTeams
	team: Team
}

export const TeamFields = ({ errors, values, team }: TeamFieldProps) => (
	<Col sm={4}>
		<h2>{toTitleCase(team)}</h2>
		<TeamInputs team={team} errors={errors?.[team]} values={values?.[team]} />
	</Col>
)

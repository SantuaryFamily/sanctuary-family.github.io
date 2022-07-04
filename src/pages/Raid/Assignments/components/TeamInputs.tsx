import { FormikErrors } from 'formik'
import { Input } from '../../../../components'

type Lane = 'lane1' | 'lane2' | 'lane3' | 'lane4' | 'lane5' | 'lane6' | 'lane7' | 'lane8' | 'lane9' | 'lane10'
export type Team = 'team1' | 'team2' | 'team3'

export type TeamLanes = {
	[key in Lane]: string
}
export type RaidTeams = { [key in Team]: TeamLanes }

export interface TeamInputsProps {
	team: Team
	errors?: FormikErrors<TeamLanes>
	values?: TeamLanes
}

export const TeamInputs = ({ team, errors, values }: TeamInputsProps) => {
	const teamInputs = []
	for (let i = 1; i <= 10; i++) {
		teamInputs.push(
			<Input
				key={i}
				htmlFor={`${team}.lane${i}`}
				label={`Lane ${i}`}
				validate={validator}
				error={errors?.[`lane${i}` as Lane]}
				value={values?.[`lane${i}` as Lane]}
			/>,
		)
	}
	return <>{teamInputs}</>
}

function validator(value: string) {
	if (!value) return
}

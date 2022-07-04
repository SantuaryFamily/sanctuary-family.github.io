import { RaidTeams } from '../pages/Raid/components/TeamInputs'

export const classNames = (...classnames: Array<string | undefined | false>): string | undefined => {
	//@ts-ignore because this should work no problem the first check will return true only if the value is a string, if its false or undefined the only response are strings of undefined
	return classnames.reduce((c1, c2) => (c1 ? (c2 ? `${c1} ${c2} ` : c1) : c2 ? `${c2} ` : undefined), '')
}

export const formatTeams = (raidTeams: RaidTeams): string => {
	const teams = Object.keys(raidTeams).map((key) => {
		//@ts-ignore
		const team = Object.entries(raidTeams[key])
			//@ts-ignore
			.map((s) => (s[1] ? `${s[0]}: ${bold(s[1])}` : undefined))
			.filter((s) => s)
			.join(', ')
		//@ts-ignore
		return team?.length ? `${underline(bold(toTitleCase(key)))}\n${team}` : undefined
	})

	return teams.join('\n')
}

const bold = (text: string) => `**${text}**`

const underline = (text: string) => `__${text}__`

const code = (text: string) => `\`${text}\``

const codeBlock = (text: string) => `\`\`\`${text}\`\`\``

export const toTitleCase = (text: string) =>
	text
		.split(' ')
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1)
		})
		.join(' ')

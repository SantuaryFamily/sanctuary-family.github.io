import { RaidTeams } from "../pages/Raid/components/TeamInputs"
import { formatTeams, toTitleCase } from "../utils"
import { Clan } from "./clanWebHooks"
import { WebhookBody } from "./webhook.types"

const BASE_URL = 'https://discord.com/api/webhooks'

export const webhookClient = {
	post: async (url: string, body: WebhookBody) => {
		const full = `${BASE_URL}/${url}`
		const options = {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		}

		fetch(full, options)
	},
}


export const formatBody = (clan: Clan, data: RaidTeams): WebhookBody => {
	const formatted = formatTeams(data)
	return {
		content: formatted,
		username: toTitleCase(clan),
		allowed_mentions: {
			parse: [],
		},
	}
}
import { RaidTeams } from '../pages/Raid/components/TeamInputs'
import { Clan, clans, TEST } from './clanWebHooks'
import { formatBody, webhookClient } from './webhook.client'

export const raid = {
	assign: async (clan: Clan, data: RaidTeams) => {
		return await webhookClient.post(clans[clan], formatBody(clan, data))
	},
	async test(data: RaidTeams) {
		return webhookClient.post(TEST, formatBody('magic', data))
	},
}


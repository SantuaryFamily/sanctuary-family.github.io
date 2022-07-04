import { formatTeams } from './../utils/index'
import axios from 'axios'
import { RaidTeams } from '../pages/Raid/components/TeamInputs'

const BASE_URL = 'https://discord.com/api/webhooks'
const Test = '993372920770478090/mQza6kzBdMl5nWTIFgYDrfUJWYCC8ApgI2sVPcp64wMfJNTmcefBcBd6iIsU5XE4D5QG'

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: { 'Access-Control-Allow-Origin': '*' },
})

instance.defaults.headers.post['Content-Type'] = 'application/json'

export const raid = {
	async magic(data: RaidTeams) {
		return instance.post(Test, formatBody(data))
	},
	// async dragon(data: any) {
	// 	return instance.post(MAGIC, { content: JSON.stringify(data) })
	// },
}

type MentionType = 'roles' | 'users' | 'everyone'

type AllowedMentions = {
	parse: Array<MentionType>
	users?: Array<string>
	replied_user?: boolean
}

type WebhookBody = {
	content?: string //one of content, file, embeds
	files?: any // one of content, file, embeds
	embeds?: Array<any> // one of content, file, embeds

	username?: string //override the default username of the webhook
	avatar_url?: string //override the default avatar of the webhook
	tts?: boolean //true if this is a TTS message
	payload_json?: string //JSON encoded body of non-file params
	allowed_mentions?: AllowedMentions
	components?: any
	attachments?: any
	flags?: number
	thread_name?: string //name of thread to create (requires the webhook channel to be a forum channel)
}

const formatBody = (data: RaidTeams): WebhookBody => {
	const formatted = formatTeams(data)
	return {
		content: formatted,
		username: 'Magic',
		allowed_mentions: {
			parse: [],
		},
	}
}

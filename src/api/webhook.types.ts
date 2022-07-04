type MentionType = 'roles' | 'users' | 'everyone'

type AllowedMentions = {
	parse: Array<MentionType>
	users?: Array<string>
	replied_user?: boolean
}

export type WebhookBody = {
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
import { genSalt, hash } from 'bcryptjs'

export const getHash = async (password, salt) => {
	console.log('test')
	const bsalt = await genSalt(salt)
	const bhash = await hash(password, bsalt)
	return bhash
}

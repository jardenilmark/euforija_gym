import { hashSync } from 'bcrypt'

const encryptPassword = context => {
	console.log(context)
	context.data.password = hashSync(context.data.password, 10)
	console.log(context)
	return context
}

export { encryptPassword }

import { hashSync } from 'bcryptjs'

const encryptPassword = context => {
	context.data.password = hashSync(context.data.password, 10)
	return context
}

export { encryptPassword }

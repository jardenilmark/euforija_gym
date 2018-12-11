const development = require('./env/development.json')

const configs = {
	// still need to add production and testing
	development
}

module.exports = configs[process.env.NODE_ENV] || configs.development

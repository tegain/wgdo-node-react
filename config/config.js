const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	require('dotenv').config({ path: '.env.dev' })
} else if (env === 'test') {
	require('dotenv').config({ path: '.env.test' })
}

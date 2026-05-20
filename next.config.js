/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
			{
				protocol: 'http',
				hostname: '**',
			},
		],
	},
}

module.exports = nextConfig

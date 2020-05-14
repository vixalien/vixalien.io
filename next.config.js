const withMDX = require('@next/mdx')({
	extension: /\.mdx$|\.md$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
			// Fixes npm packages that depend on `fs` module
			if (!isServer) {
				config.node = {
					fs: 'empty'
				}
			}
			// Allow absolute imports
			config.resolve.modules.push(__dirname)

			return config
		}
});
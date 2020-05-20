const withMDX = require('@next/mdx')({
  extension: /\.mdx$|\.md$/,
  options: {
    remarkPlugins: [
      require('remark-slug'),
      require('remark-autolink-headings'),
      require('remark-code-titles')
    ]
  }
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      };
    } else {
      // Generate sitemap
      require('./lib/generate-sitemap');
    }
    // Allow absolute imports
    config.resolve.modules.push(__dirname);

    return config;
  }
});

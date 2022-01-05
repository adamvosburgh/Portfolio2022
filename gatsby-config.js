module.exports = {
  pathPrefix: '/Portfolio2022',
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: '/slides',
      },
    },
  ],
}

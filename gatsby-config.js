module.exports = {
  siteMetadata: {
    title: 'Hayato Kajiyama',
    description: 'Frontend Engineer ♥ Emacs, UI and 🍺',
    author: 'Hayato Kajiyama',
    url: 'https://hyakt.dev',
    icon: 'https://www.gravatar.com/avatar/d9618150777ac86730044bb6de049016?s=960',
    socials: {
      github: 'https://github.com/hyakt/',
      twitter: 'https://twitter.com/piginbeer/',
      linkedin: 'https://www.linkedin.com/in/hayato-kajiyama/',
      facebook: 'https://www.facebook.com/hayato.kajiyama0/',
      mail: 'hyakt0@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-130604911-1'
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true // defaults to false
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hyakt.dev`,
        short_name: `hyakt.dev`,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#F2F2F2`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-preload-fonts`
  ]
}

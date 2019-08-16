module.exports = {
  siteMetadata: {
    title: 'hyakt.dev',
    description: 'Software engineer ♥ Emacs, Web, HCI and 🍺',
    author: 'Hayato KAJIYAMA',
    url: 'https://hyakt.dev',
    icon: 'https://www.gravatar.com/avatar/d9618150777ac86730044bb6de049016?s=130',
    socials: {
      github: 'https://github.com/hyakt/',
      twitter: 'https://twitter.com/hyakt0/',
      linkedin: 'https://www.linkedin.com/in/hyakt/',
      facebook: 'https://www.facebook.com/hyakt0/',
      mail: 'hyakt0@gmail.com'
    }
  },
  plugins: [
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
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}

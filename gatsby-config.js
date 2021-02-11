/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const dotenv = require("dotenv").config()
module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: 'Simply Blog!', 
      author: 'Abdulkabir Ojulari'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      }
    },
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-plugin-sharp', 
      `gatsby-transformer-sharp`,
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images', {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
          ]
        }

      },
       {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Simply Blog`,
          short_name: `S-Blog`,
          start_url: `/`,
          background_color: `#4d565e`,
          theme_color: `#9cc1e5`,
          display: `standalone`,
          icon: `${__dirname}/public/assets/png/logo.jpg`,
        },
      },
      {
        resolve: `gatsby-plugin-offline`,
        options: {
          precachePages: [`/`,`/about/`, `/blog/*`, `/contact/`],
        },
      },
  ]

}

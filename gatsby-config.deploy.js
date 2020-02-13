module.exports = {
  siteMetadata: {
    title: `dbarros`,
    author: `Cesar de Barros`,
    description: `if(true) { loveToCode(); };`,
    siteUrl: `https://dbarros.dev/`,
    profilePic:
      "https://lh3.googleusercontent.com/Hlbsre19I9mKsGY-P7YHfXxFMP9wJG3ItaN6zM7Mn9oZga6ZP0kPbrlEnZ31KE6mZpepEbKan7NsrXUoiZYlbMxd7sEo7BdVJoDJfL5jJPRcrLzAC3AyV5GOwl0zE3CRK_RlmL0rtUL7dDXWt2wLAH0gqu9XwFEpAQT0s9Tq28lJZRoadG4PABDrHtrNw8oyVW_d0-rFuX9HIKTR7GPty6Ssmx6IOaWmiMRznSpsXWvG-oJiQtvKxpIW2BaV5a4C5C_PasR4ZmIroKiBWNFgcUyU-DHmGZPtVQZ4D3Y31Wwced78ekEorSbvlYq5OQDdI3UEvpxiidI4J-3SpTKYOgnnA42PvzQN2AiWI4JdilzFcHR5bP45i7X176riGxvMKSZTtMKwLRvnlFFG35ZvubN3DSZaO4MzOh5kUHAfHS4mEQvIkEXPtZXqu_UiZ6FfBdHPdOYdWXh4Yolb-CWII5Ssl1RG9BajDk5gAmPhMJXhqc7tQ8y_2hLDB2_w51M3bSalB9lBSt8nAt3molGoBdx6EV4q9wc0eeK1MipBtIRCXACFFe3EeRDj6SJoJ0wIHHzcP6EXQzFgWY1IzRVi3OuRWxatbWbsjdduJEV-QfYYqXUyXaKlcPjTxF3hhNM00uQe5GJ36LieJ-J0y2uAMy4I8TVj6pSDDQlLgeu59VM1LcdDloq3fY0=w822-h669-no",
    social: {
      github: {
        username: `cbsorrilha`,
        link: `https://github.com/cbsorrilha`,
      },
      instagram: {
        username: `cbsorrilha`,
        link: `https://www.instagram.com/cbsorrilha/`,
      },
      linkedin: {
        username: `cbsorrilha`,
        link: `https://www.linkedin.com/in/cbsorrilha/`,
      },
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "{{GATSBY_FIREBASE_MEASUREMENT_ID}}",
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dbarros.dev`,
        short_name: `dbarros`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `content/assets/logo.svg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          analytics: true,
        },
        credentials: {
          apiKey: "{{GATSBY_FIREBASE_API_KEY}}",
          authDomain: "{{GATSBY_FIREBASE_AUTH_DOMAIN}}",
          databaseURL: "{{GATSBY_FIREBASE_DATABASE_URL}}",
          projectId: "{{GATSBY_FIREBASE_PROJECT_ID}}",
          storageBucket: "{{GATSBY_FIREBASE_STORAGE_BUCKET}}",
          messagingSenderId: "{{GATSBY_FIREBASE_MESSAGING_SENDER_ID}}",
          appId: "{{GATSBY_FIREBASE_APP_ID}}",
          measurementId: "{{GATSBY_FIREBASE_MEASUREMENT_ID}}",
        },
      },
    },
  ],
}

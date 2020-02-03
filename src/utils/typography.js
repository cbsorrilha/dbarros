import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: '#FFFFFE',
      textDecoration: 'none',
      boxShadow: 'none',
    },
    "a.active": {
      boxShadow: '0 1px 0 0 currentColor',
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography({
  ...Wordpress2016,
  headerFontFamily: ['Fira Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Fira Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

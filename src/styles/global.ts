import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$veryDarkBlue',
    color: '$lightGrey',
    fontSize: '1.5rem',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Overpass',
    fontWeight: '$regular',
  },

  ':root': {
    fontSize: '10px',
  },

  'button': {
    cursor: 'pointer',
  },
  
  'h1, h2, h3, h4': {
    color:'$white'
  }
})

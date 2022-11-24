import { styled } from "../../styles/stitches.config";

export const Title = styled('h2', {
  fontSize: '2.8rem',
  marginTop: '3rem',

  variants: {
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center'
      }
    }
  },

  '@bp1': {
    fontSize: '2.4rem',
    marginTop: '2rem',
  }
})
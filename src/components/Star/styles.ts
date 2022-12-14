import { styled } from "../../styles/stitches.config";

export const Star = styled('div', {
  background: '$grey400',
  border: '0',
  borderRadius: '50%',
  width: '5rem',
  height: '4.7rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$bold',
  color: '$lightGrey',
  fontSize: '1.8rem',

  '@bp1': {
    width: '4rem',
    height: '4rem',
  },

  img: {
    '@bp1': {
      width: '1.3rem',
    }
  }
} )
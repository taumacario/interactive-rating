import { styled } from "../../styles/stitches.config";

export const Circle = styled('button', {
  border: '0',
  borderRadius: '50%',
  width: '5rem',
  height: '5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$grey300',
  color: '$lightGrey',
  
  fontSize: '1.8rem',
  fontWeight: '$bold',

  '&:hover': {
    background: '$orange',
    color: '$white',
  },

  variants: {
    layout: { 
      true: {
        background: '$mediumGrey',
        color: '$white',
      }
    }
  },

  '@bp1': {
    width: '4rem',
    height: '4rem',
    fontSize: '1.5rem',
  },
} )
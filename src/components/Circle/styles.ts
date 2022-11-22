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
  
  '&:active': {
    background: '$mediumGrey',
    color: '$white',
  },
} )
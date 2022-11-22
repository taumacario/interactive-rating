import { styled } from "../../styles/stitches.config";

export const Button = styled('button', {
  borderRadius: '3rem',
  border: '0',
  background: '$orange',
  color: '$white',
  textTransform: 'uppercase',
  fontWeight: '$bold',
  width: '100%',
  paddingBlock: '1.4rem',

  marginTop: '3rem',

  '&:hover': {
    background: '$white',
    color: '$orange',
  },

  '&:disable': {
    opacity: '0.6',
    cursor: 'none'
  }
})
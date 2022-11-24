import { styled } from "../../styles/stitches.config";

export const Card = styled('div', {
  backgroundColor: '$darkBlue',
  padding: '3.5rem',
  borderRadius: '2.9rem',
  flex: '1',

  '@bp1': {
    padding: '2.5rem',
    borderRadius: '1.5rem',
  },
})
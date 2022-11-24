import { styled } from "../../styles/stitches.config";

export const Container = styled('div', {
  maxWidth: '455px',
  height: '100vh',
  paddingInline: '2rem',
  marginInline: 'auto',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',

  '@bp1': {
    maxWidth: '350px',
  },
})
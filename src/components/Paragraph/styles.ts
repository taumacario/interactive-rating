import { styled } from "../../styles/stitches.config";

export const Paragraph = styled('p', {
  marginTop: '1rem',
  lineHeight: '1.6',
  
  variants: {
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center'
      }
    }
  }
})
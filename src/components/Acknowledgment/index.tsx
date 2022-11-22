import { Paragraph } from "../Paragraph";
import { Title } from "../Title";
import * as S from './styles'
import ThanksImg from '../../assets/illustration-thank-you.svg'
import { RateValue } from "../RateValue";


export function Acknowledgment() {
  return (
    <>
      <S.Figure>
        <img src={ThanksImg} alt="thank you image" />
      </S.Figure>
      <RateValue />
      <Title title="Thank you!" align="center"/>
      <Paragraph 
        description="We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!"
        align="center"
      />
    </>
  );
}
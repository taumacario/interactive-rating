import * as S from './styles'
import StarImg from '../../assets/icon-star.svg'

export function Star() {
  return (
    <S.Star>
       <img src={StarImg} alt='star icon'/>
    </S.Star>
  );
}
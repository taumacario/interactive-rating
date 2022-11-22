import * as S from './styles'
import { Circle } from "../Circle";

export function Numbers() {
  return (
    <S.NumbersConatiner>
      <Circle value={1}/>
      <Circle value={2}/>
      <Circle value={3}/>
      <Circle value={4}/>
      <Circle value={5}/>
    </S.NumbersConatiner>
  );
}
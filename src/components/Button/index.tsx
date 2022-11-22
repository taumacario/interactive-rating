import { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import * as S from './styles'

export function Button() {
  const {bla} = useContext(RateContext)

  return (
    <S.Button onClick={bla}>
      Submit
    </S.Button>
  );
}
import { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import * as S from './styles'

export function RateValue( ) {
  const {rate} = useContext(RateContext)

  return (
    <S.RateValue>
      You selected {rate} out of 5 
    </S.RateValue>
  );
}
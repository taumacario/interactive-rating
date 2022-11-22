import { useContext, useState } from 'react';
import { RateContext } from '../../context/RateContext';
import * as S from './styles'

interface CircleProps {
  value: number
}

export function Circle({ value } : CircleProps) {
  const {setRate, rate} = useContext(RateContext)

  return (
    <>
    <S.Circle layout={rate === value} onClick={() => setRate(value)}>
      {value}
    </S.Circle>
    </>
  );
}
import { useState } from 'react';
import * as S from './styles'

interface CircleProps {
  value: number
}

export function Circle({ value} : CircleProps) {
  const [rate, setRate] = useState(0)

  return (
    <S.Circle onClick={() => setRate(value)}>
      {value}
    </S.Circle>
  );
}
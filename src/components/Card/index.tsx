import { ReactNode } from 'react';
import * as S from './styles';

interface CardProps {
  children: ReactNode
}

export function Card({ children } : CardProps) {
  return (
    <S.Card>
      {children}
    </S.Card>
  );
}
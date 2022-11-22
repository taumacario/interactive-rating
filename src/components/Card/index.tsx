import { useContext } from 'react';
import * as S from './styles';

import {RateContext} from '../../context/RateContext'
import { Acknowledgment } from '../Acknowledgment';
import { Rating } from '../Rating';

export function Card() {
  const {hideThanks} = useContext(RateContext)

  return (
    <S.Card>
      {hideThanks ?
        <Rating /> :
        <Acknowledgment />
      }
    </S.Card>
  );
}
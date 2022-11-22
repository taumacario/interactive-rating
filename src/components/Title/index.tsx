import * as S from './styles'

interface TitleProps {
  title: string
  align: 'left' | 'center'
}

export function Title({ title, align } : TitleProps) {
  return (
    <S.Title align={align}>
      {title}
    </S.Title>
  );
}
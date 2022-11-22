import * as S from './styles'

interface ParagraphProps {
  description: string
  align: 'left' | 'center'
}

export function Paragraph({ description, align } : ParagraphProps) {
  return (
    <S.Paragraph align={align}>
      {description}
    </S.Paragraph>
  );
}
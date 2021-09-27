import * as React from 'react';
import * as S from './styles';

interface Props extends S.ButtonStylePropsType {
  text: string;
  onPress?(): void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ text, size, color, ghost, onPress, disabled }) => (
  <S.Content
    size={size}
    color={color}
    ghost={ghost}
    onPress={onPress}
    disabled={disabled}
  >
    <S.Text color={color} ghost={ghost} size={size}>
      {text}
    </S.Text>
  </S.Content>
);

export default Button;

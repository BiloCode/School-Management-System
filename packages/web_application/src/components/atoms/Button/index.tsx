import * as React from 'react';
import * as S from './styles';

import { BColor, BSize } from '../../../styles/button';

interface ButtonPropsType extends S.ButtonStylePropsType {
  text: string;
  onPress?(): void;
  disabled?: boolean;
}

<<<<<<< HEAD
const Button: React.FC<ButtonPropsType> = ({
  text,
  size,
  color,
  ghost,
  onPress,
  disabled,
=======
export const Button : FC<ButtonPropsType> = ({
  size, color, ghost, text, opacity, onPress,
>>>>>>> bee6005f2756c0c2602f24eef8af9b123fe7673a
}) => (
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

Button.defaultProps = {
  color: BColor.BLUE,
  size: BSize.NORMAL,
};

export default Button;

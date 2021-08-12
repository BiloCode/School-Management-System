import styled from 'styled-components/native';
import Colors from '../../../config/colors';

type ColorButtonTypes = 'RED'|'BLUE';
type SizeButton = 'small' | 'normal';

const size_values = {
  small: '32px',
  normal: '48px',
};
const size_text_values = {
  small: '12px',
  normal: '14px',
};

export interface ButtonStylePropsType {
  color : ColorButtonTypes;
  size : SizeButton;
  opacity? : boolean;
  ghost? : boolean;
}

export const ButtonContent = styled.Pressable<ButtonStylePropsType>`
  width : 100%;
  height : ${({ size }) => size_values[size]};
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:5px;
  border : ${({ color, ghost }) => (ghost ? `3px solid ${Colors[color]}` : 'none')};
  background-color : ${({ color, ghost }) => (ghost ? 'transparent' : Colors[color])};
  opacity : ${({ opacity }) => (opacity ? 0.5 : 1)};
`;

export const ButtonText = styled.Text<ButtonStylePropsType>`
  color: ${({ color, ghost }) => (ghost ? Colors[color] : Colors.WHITE)};
  font-size:${({ size }) => size_text_values[size]};
`;

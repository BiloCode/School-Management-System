import styled from 'styled-components/native';

import { Fonts } from '../../../styles/font';
import { BSize, BColor, BTextSize } from '../../../styles/button';

export interface ButtonStylePropsType {
  ghost?: boolean;
  size?: keyof typeof BSize;
  color?: keyof typeof BColor;
}

export const Content = styled.TouchableOpacity<ButtonStylePropsType>(
  ({ size, color, ghost, disabled }) => {
    const opacity = disabled ? 0.5 : 1;
    const height = BSize[size || 'NORMAL'];
    const background = ghost ? 'transparent' : BColor[color || 'BLUE'];
    const border = ghost ? `2px solid ${BColor[color || 'BLUE']}` : 'none';

    return `
      width: 100%;
      height: ${height};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      border: ${border};
      background-color: ${background};
      opacity: ${opacity};
  `;
  }
);

export const Text = styled.Text<ButtonStylePropsType>(({ size, color, ghost }) => {
  const fontSize = BTextSize[size || 'NORMAL'];
  const colorText = ghost ? BColor[color || 'BLUE'] : BColor.WHITE;

  return `
    color: ${colorText};
    font-size: ${fontSize};
    font-family: ${Fonts.EXTRA_BOLD};
`;
});

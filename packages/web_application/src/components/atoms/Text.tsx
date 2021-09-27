import styled from 'styled-components/native';

import { Fonts } from '../../styles/font';
import { TColor, TSize, LINE_HEIGHT } from '../../styles/text';

interface TextPropsType {
  size?: TSize;
  color?: TColor;
  weight?: Fonts;
  center?: boolean;
}

const Text = styled.Text<TextPropsType>`
  color: ${({ color }) => color};
  font-family: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size!}px`};
  line-height: ${({ size }) => `${+size! * LINE_HEIGHT}px`};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

Text.defaultProps = {
  color: TColor.BLACK,
  weight: Fonts.REGULAR,
  size: TSize.NORMAL
};

export default Text;

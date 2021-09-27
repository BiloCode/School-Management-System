import styled from 'styled-components/native';

import { Fonts } from '../../styles/font';
import { TColor, TSize, LINE_HEIGHT } from '../../styles/text';

interface Props {
  center?: boolean;
  size?: keyof typeof TSize;
  color?: keyof typeof TColor;
  weight?: keyof typeof Fonts;
}

const Text = styled.Text<Props>(({ color, weight, center, size }) => {
  const colorValue = TColor[color || 'BLACK'];
  const fontValue = Fonts[weight || 'REGULAR'];
  const sizeValue = `${TSize[size || 'NORMAL']}px`;
  const lineValue = `${TSize[size || 'NORMAL'] * LINE_HEIGHT}px`;

  return `
    color: ${colorValue};
    font-size: ${sizeValue};
    line-height: ${lineValue};
    font-family: ${fontValue};
    text-align: ${center ? 'center' : 'left'};
`;
});

export default Text;

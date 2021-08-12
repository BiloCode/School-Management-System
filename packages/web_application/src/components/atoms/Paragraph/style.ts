import styled from 'styled-components/native';

import Colors, { ColorsType } from '../../../config/colors';
// import { FontWeightTypes } from '../../../config/FontWeightTypes';
import { TextSizes, TextTypes } from '../../../config/TextSize';

interface ParagraphPropsType {
  // weight : FontWeightTypes;
  color : ColorsType;
  size : TextTypes;
}
const weight_values = {
  ultra_bold: 900,
  bold: 700,
  ligth: 200,
};

export const Paragraph = styled.Text<ParagraphPropsType>`
  color : ${({ color }) => Colors[color]};
  font-size : ${({ size }) => TextSizes[size]};

`;

import styled from 'styled-components/native';
import { TColor } from '../../../styles/text';

export const ImageContainer = styled.View`
  position: relative;
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${TColor.BLUE};
`;

export const ImageCarrusel = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ArrowNextContainer = styled.Pressable`
  position: absolute;
  padding: 20px 10px;
  right: 0;
`;

export const ArrowPrevContainer = styled.Pressable`
  position: absolute;
  padding: 20px 10px;
  left: 0;
`;

import styled from 'styled-components/native';
import { Colors } from '../../../styles/colors';
import { TColor } from '../../../styles/text';

export enum BDrawerItemBackColor {
  WHITE = Colors.WHITE,
  WHITE_LIGHT_B = Colors.WHITE_LIGHT_B,
}

export interface DrawerItemStyleProps {
  isPressed?: boolean;
  color?: TColor;
  inactive?: boolean;
}

export const Container = styled.View<DrawerItemStyleProps>`
  width: 100%;
  height: 48px;
  background-color: ${({ isPressed }) =>
    isPressed ? Colors.WHITE_LIGHT_B : Colors.WHITE};
  opacity: ${({ inactive }) => (inactive ? 0.5 : 1)};
  padding: 32px;
`;

export const DrawerItemContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
`;

export const ImageContainer = styled.View`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

export const ImageStyle = styled.Image`
  width: 100%;
  height: 100%;
`;

import styled from 'styled-components/native';

import { HomeItemColor } from '../../../styles/home_item';

export interface ContainerProps {
  color: HomeItemColor;
}

export const Container = styled.View`
  max-width: 100%;
  min-width: 142px;
  margin-bottom: 15px;
`;

export const HomeItemButtonContainer = styled.View<ContainerProps>`
  width: 100%;

  height: 96px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 7px;
  justify-content: center;
  background-color: ${({ color }) => color && color};
`;

export const IconContainer = styled.View`
  width: 45px;
  height: 46px;
`;

export const TextContainer = styled.View`
  align-self: center;
`;

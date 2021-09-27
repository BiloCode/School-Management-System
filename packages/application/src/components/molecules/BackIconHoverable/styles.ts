import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';

type ContainerProps = {
  pressed: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 40px;
  height: 40px;
  background-color: ${({ pressed }) => (pressed ? Colors.WHITE_LIGHT_B : '#fff')};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

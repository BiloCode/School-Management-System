import styled from 'styled-components/native';

export interface IconStylePropsType {
  size:number;
}

export const IconStyle = styled.Image<IconStylePropsType>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

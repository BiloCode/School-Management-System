import styled from 'styled-components/native';

interface ImagePropsType {
  size : number;
}

export const ImageStyle = styled.View<ImagePropsType>`
  width : 200px;
  height : 200px;
`;

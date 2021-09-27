import styled from 'styled-components/native';
import { Colors } from '../../../styles/colors';

export const MainContainer = styled.View`
  flex: 1;
  position: relative;
`;

export const PageContainer = styled.View`
  margin-top: 32px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  padding-left: 5px;
`;

export const InputContainer = styled.View`
  padding: 40px 0 24px 0;
`;

export const FileMessage = styled.View`
  margin: 32px 0 16px 0;
`;

export const SendButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px 30px;
  background-color: ${Colors.WHITE};
`;

export const ActionsButton = styled.View`
  flex-direction: row;
`;

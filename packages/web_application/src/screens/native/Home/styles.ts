import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 30px;
`;

export const WelcomeContainer = styled.View`
  width: 100%;
  margin-bottom: 34px;
`;

export const OptionsContainer = styled.View`
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HomeworksContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ViewAllContainer = styled.Pressable`
  width: 100%;
  padding: 5px;
  margin: 50px 0;

  display: flex;
  justify-content: center;
`;

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import * as S from './styles';

import { Colors } from '../../../styles/colors';

const SourceLoading = () => (
  <S.Container>
    <ActivityIndicator size="large" color={Colors.BLUE} />
  </S.Container>
);

export default SourceLoading;

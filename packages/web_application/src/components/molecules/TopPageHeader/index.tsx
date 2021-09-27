import * as React from 'react';
import { useNavigation } from '@react-navigation/core';
import * as S from './styles';

import Text from '../../atoms/Text';
import BackIconHoverable from '../BackIconHoverable';

type Props = {
  title?: string;
};

const TopPageHeader: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  const goToBack = React.useCallback(() => navigation.goBack(), []);

  return (
    <S.MainContainer>
      <S.Icon>
        <BackIconHoverable onPress={goToBack} />
      </S.Icon>
      {title !== '' && <Text weight="BOLD">{title}</Text>}
    </S.MainContainer>
  );
};

export default TopPageHeader;

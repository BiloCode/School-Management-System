import * as React from 'react';
import { Pressable } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import * as S from './styles';

import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

type TProps = {
  title: string;
};

const NavigationBar = ({ title }: TProps) => {
  const navigation = useNavigation();

  const openDrawerMenu = () => navigation.dispatch(DrawerActions.openDrawer);

  return (
    <S.Container>
      <Text weight="BLACK" size="BIG" color="WHITE">
        {title}
      </Text>
      <Pressable onPress={openDrawerMenu}>
        {({ pressed }) => (
          <S.CircularContent pressed={pressed}>
            <Icon icon="BARS" />
          </S.CircularContent>
        )}
      </Pressable>
    </S.Container>
  );
};

export default NavigationBar;

import * as React from 'react';
import { Pressable } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import * as S from './styles';

import Text from '../../atoms/Text';

import { Fonts } from '../../../styles/font';
import { TColor, TSize } from '../../../styles/text';

import Icon from '../../atoms/Icon/Icon';
import { IconType } from '../../../styles/icons';

type TProps = {
  title: string;
};

const NavigationBar = ({ title }: TProps) => {
  const navigation = useNavigation();

  const openDrawerMenu = () => navigation.dispatch(DrawerActions.openDrawer);

  return (
    <S.Container>
      <Text weight={Fonts.BLACK} size={TSize.BIG} color={TColor.WHITE}>
        {title}
      </Text>
      <Pressable onPress={openDrawerMenu}>
        {({ pressed }) => (
          <S.CircularContent pressed={pressed}>
            <Icon icon={IconType.BARS} />
          </S.CircularContent>
        )}
      </Pressable>
    </S.Container>
  );
};

export default NavigationBar;

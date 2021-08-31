import * as React from 'react';
import * as S from './styles';

import Text from '../../atoms/Text';

import { TSize } from '../../../styles/text';
import { Fonts } from '../../../styles/font';
import { Pressable } from 'react-native';

interface DrawerItemPropsType extends S.DrawerItemStyleProps {
  text: string;
  iconSource: any;
  onPress(): void;
}

const DrawerItem: React.FC<DrawerItemPropsType> = ({
  text,
  iconSource,
  onPress,
  inactive,
  color,
  isPressed,
}) => {
  const onPressEnd = () => {
    if (inactive) return;
    onPress();
  };

  return (
    <Pressable onPressOut={onPressEnd}>
      {({ pressed }) => (
        <S.Container
          inactive={inactive}
          isPressed={!inactive && (isPressed || pressed)}
        >
          <S.DrawerItemContent>
            <S.ImageContainer>
              <S.ImageStyle source={iconSource} resizeMode="contain" />
            </S.ImageContainer>
            <Text color={color} size={TSize.NORMAL} weight={Fonts.BOLD}>
              {text}
            </Text>
          </S.DrawerItemContent>
        </S.Container>
      )}
    </Pressable>
  );
};

export default DrawerItem;

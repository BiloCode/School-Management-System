import * as React from 'react';
import { Pressable } from 'react-native';
import * as S from './styles';

import Text from '../../atoms/Text';

import { TSize } from '../../../styles/text';
import { Fonts } from '../../../styles/font';
import { IconType } from '../../../styles/icons';

interface DrawerItemPropsType extends S.DrawerItemStyleProps {
  text: string;
  iconSource: IconType;
  onPress(): void;
}

const DrawerItem: React.FC<DrawerItemPropsType> = ({
  text,
  iconSource,
  onPress,
  inactive,
  color,
  isPressed
}) => {
  const onPressEnd = () => {
    if (inactive) return;
    onPress();
  };

  return (
    <Pressable onPressOut={onPressEnd}>
      {({ pressed }) => (
        <S.Container inactive={inactive} isPressed={!inactive && (isPressed || pressed)}>
          <S.DrawerItemContent>
            <S.ImageContainer>
              <S.ImageStyle source={iconSource} resizeMode="contain" />
            </S.ImageContainer>
            <Text color={color} size="NORMAL" weight="BOLD">
              {text}
            </Text>
          </S.DrawerItemContent>
        </S.Container>
      )}
    </Pressable>
  );
};

export default DrawerItem;

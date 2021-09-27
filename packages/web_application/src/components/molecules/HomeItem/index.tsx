import * as React from 'react';
import * as S from './styles';

import Text from '../../atoms/Text';
import { TColor, TSize } from '../../../styles/text';
import { Fonts } from '../../../styles/font';
import Icon from '../../atoms/Icon/Icon';
import { IconType } from '../../../styles/icons';

interface HomeItemPropsType extends S.ContainerProps {
  icon: IconType;
  text: string;
  onPress?(): void;
}

const HomeItem: React.FC<HomeItemPropsType> = ({ icon, text, onPress, color }) => (
  <S.Container>
    <S.HomeItemButtonContainer color={color} onTouchEnd={onPress}>
      <S.IconContainer>
        <Icon icon={icon} />
      </S.IconContainer>
    </S.HomeItemButtonContainer>
    <S.TextContainer>
      <Text size={TSize.SMALL} color={TColor.BLACK} weight={Fonts.BOLD}>
        {text}
      </Text>
    </S.TextContainer>
  </S.Container>
);

export default HomeItem;

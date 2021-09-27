import * as React from 'react';
import * as S from './styles';

import Text from '../../atoms/Text';

import { TColor } from '../../../styles/text';

interface Props {
  title: string;
  date: string;
  description: string;
  titleColor?: keyof typeof TColor;
}

const PublicationInfo: React.FC<Props> = ({ title, date, description, titleColor }) => (
  <S.Container>
    <S.HeaderContainer>
      <S.TitleContainer>
        <Text weight="BOLD" size="NORMAL" color={titleColor}>
          {title}
        </Text>
      </S.TitleContainer>
      <Text weight="REGULAR" size="VERY_SMALL" color="GRAY">
        {date}
      </Text>
    </S.HeaderContainer>
    <Text weight="REGULAR" size="VERY_SMALL">
      {description}
    </Text>
  </S.Container>
);

export default PublicationInfo;

import * as React from 'react';
import * as S from './styles';

import { IconType } from '../../../styles/icons';

export interface IconPropsType {
  icon: IconType;
}

const Icon: React.FC<IconPropsType> = ({ icon }) => (
  <S.Container source={icon} resizeMode="contain" />
);

export default Icon;

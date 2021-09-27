import * as React from 'react';
import { Image } from 'react-native';

import { IconType } from '../../styles/icons';

export interface IconPropsType {
  icon: keyof typeof IconType;
}

const Icon: React.FC<IconPropsType> = ({ icon }) => (
  <Image source={IconType[icon]} resizeMode="contain" />
);

export default Icon;

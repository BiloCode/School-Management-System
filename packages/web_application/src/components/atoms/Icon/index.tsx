import React, { FC } from 'react';
import { IconStyle, IconStylePropsType } from './style';
import { Icons } from '../../../config/icon';

interface IconPropsType extends IconStylePropsType {
  icon : Icons;
}

export const Icon : FC<IconPropsType> = ({ icon, size }) => (
  <IconStyle source={icon} size={size} resizeMode="contain" />
);

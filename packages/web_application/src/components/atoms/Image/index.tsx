import React, { FC } from 'react';
import { ImageStyle } from './style';

interface ImagePropsType {
  size : number;
  src : string;
}

export const Image : FC<ImagePropsType> = ({ size, src }) => <ImageStyle size={size} src={src} />;

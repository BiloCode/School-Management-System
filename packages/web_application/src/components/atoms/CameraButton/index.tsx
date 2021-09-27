import * as React from 'react';
import { Image } from 'react-native';
import * as S from './styles';

import { IconType } from '../../../styles/icons';

const CameraButton = () => (
  <S.Button>
    <Image source={IconType.CAMERA} />
  </S.Button>
);

export default CameraButton;

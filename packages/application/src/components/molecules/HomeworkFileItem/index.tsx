import * as React from 'react';
import { ImageSourcePropType, View, Image } from 'react-native';
import * as S from './styles';

import Text from '../../atoms/Text';

import Icon from '../../atoms/Icon';

type TProps = {
  course: string;
  file: string;
};

const HomeworkFileItem = ({ course, file }: TProps) => {
  const extension = getFileExtension(file);
  const canShowFileExtension = extension !== '';

  return (
    <S.Container>
      <View>
        {canShowFileExtension && (
          <Image source={resourceImages[extension]} resizeMode="contain" />
        )}
      </View>
      <S.DetailCourse>
        <Text>{course}</Text>
        <Text size="SMALL" color="BLACK">
          Archivo {extension}
        </Text>
      </S.DetailCourse>
      {canShowFileExtension && <Icon icon="ARROW_RIGHT_BLACK" />}
    </S.Container>
  );
};

const resourceImages: Record<string, ImageSourcePropType> = {
  pdf: require('../../../assets/icons/file-pdf.png'),
  jpg: require('../../../assets/icons/file-image.png')
};

function getFileExtension(path: string) {
  const index = path.lastIndexOf('.');
  return index !== -1 ? path.slice(index + 1) : '';
}

export default HomeworkFileItem;

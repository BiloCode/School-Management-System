import * as React from 'react';
import { Animated } from 'react-native';
import * as S from './styles';

import Icon from '../../atoms/Icon';

interface CarruselImagesPropsType {
  images: string[];
}

const CarruselImages: React.FC<CarruselImagesPropsType> = ({ images }) => {
  const [actualWidth, setActualWidth] = React.useState<number>(0);
  const [actualIndex, setActualIndex] = React.useState<number>(0);

  const translation = React.useRef(new Animated.Value(0)).current;

  const onTouchNext = () => {
    Animated.timing(translation, {
      toValue: actualWidth * -(actualIndex + 1),
      duration: 500,
      useNativeDriver: true
    }).start();
    setActualIndex(() => actualIndex + 1);
  };

  const onTouchPrev = () => {
    Animated.timing(translation, {
      toValue: actualWidth * -(actualIndex - 1),
      duration: 500,
      useNativeDriver: true
    }).start();
    setActualIndex(() => actualIndex - 1);
  };

  return (
    <S.ImageContainer
      onLayout={(event) => {
        setActualWidth(event.nativeEvent.layout.width);
      }}
    >
      <Animated.View
        style={[
          {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            transform: [
              {
                translateX: translation
              }
            ]
          }
        ]}
      >
        {images.map((v, i) => (
          <S.ImageCarrusel key={i} source={{ uri: v }} />
        ))}
      </Animated.View>
      {images.length - 1 !== actualIndex && (
        <S.ArrowNextContainer testID="arrow-right" onTouchEnd={onTouchNext}>
          <Icon icon="ARROW_RIGHT" />
        </S.ArrowNextContainer>
      )}
      {actualIndex !== 0 && (
        <S.ArrowPrevContainer testID="arrow-left" onTouchEnd={onTouchPrev}>
          <Icon icon="ARROW_LEFT" />
        </S.ArrowPrevContainer>
      )}
    </S.ImageContainer>
  );
};

export default CarruselImages;

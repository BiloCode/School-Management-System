import * as React from 'react';
import * as S from './styles';

import Button from '../../atoms/Button';
import PublicationInfo from '../../molecules/PublicationInfo';
import CarrouselImages from '../../molecules/CarrouselImages';

type PublicationType = 'homework' | 'announcement';

interface Props {
  type: PublicationType;
  title: string;
  date: string;
  description: string;
  onPress?(): void;
  images?: string[];
}

const Publication: React.FC<Props> = ({
  type,
  title,
  date,
  description,
  onPress,
  images
}) => (
  <S.Container>
    <PublicationInfo
      date={date}
      title={title}
      description={description}
      titleColor={type === 'homework' ? 'BLUE' : 'RED'}
    />

    {images && (
      <S.CarruselContainer>
        <CarrouselImages images={images} />
      </S.CarruselContainer>
    )}

    {type === 'homework' && (
      <S.ButtonContainer>
        <Button text="Ver detalles" color="BLUE" size="SMALL" onPress={onPress} />
      </S.ButtonContainer>
    )}
  </S.Container>
);

export default Publication;

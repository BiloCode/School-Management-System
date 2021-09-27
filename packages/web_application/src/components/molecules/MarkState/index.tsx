import * as React from 'react';
import { ActivityIndicator, Image } from 'react-native';
import * as S from './styles';

import { BSize } from '../../../styles/button';
import { TColor } from '../../../styles/text';
import { MarkStateOptions } from '../../../styles/mark_state';

import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

type MarkStatusWithoutLoading = Exclude<MarkStateOptions, MarkStateOptions.LOADING>;

type TProps = {
  state: MarkStateOptions;
  datetime?: string;
  onButtonPress?(): void;
};

const MarkState = ({ state, datetime, onButtonPress }: TProps) => {
  const normalizeState = state || MarkStateOptions.Ok;
  const normalizeTitleColor = titleColor[state || MarkStateOptions.Ok];

  return (
    <S.Container>
      <S.ImageStatus>
        {state === MarkStateOptions.LOADING ? (
          <ActivityIndicator size={40} color={String(TColor.BLUE)} />
        ) : (
          <Image source={imageStatus[state]} />
        )}
      </S.ImageStatus>
      <S.Detail>
        <Text weight="BOLD" color={normalizeTitleColor}>
          {titleText[normalizeState]}
        </Text>
        <Text size="SMALL">
          {subtitleText[normalizeState].replace('{{datetime}}', datetime || '')}
        </Text>
      </S.Detail>
      {state !== MarkStateOptions.LOADING && (
        <Button
          size="SMALL"
          onPress={onButtonPress}
          text={buttonText[normalizeState]}
          disabled={state === MarkStateOptions.LOCK}
        />
      )}
    </S.Container>
  );
};

const imageStatus: Record<MarkStatusWithoutLoading, string> = {
  bad: require('../../../assets/icons/mark-bad.png'),
  lock: require('../../../assets/icons/mark-lock.png'),
  ok: require('../../../assets/icons/mark-ok.png')
};

const titleColor: Record<MarkStateOptions, keyof typeof TColor> = {
  bad: 'RED',
  loading: 'BLUE',
  ok: 'GREEN',
  lock: 'BLUE'
};

const titleText: Record<MarkStateOptions, string> = {
  bad: 'Aun no has marcado tu asistencia',
  loading: 'Marcando asistencia',
  lock: 'Asistencia Cerrada',
  ok: 'Asistencia Marcada'
};

const subtitleText: Record<MarkStateOptions, string> = {
  bad: 'La asistencia esta disponible ahora',
  loading: 'Este proceso puede llevar unos momentos',
  lock: 'Tu profesor/tutor ha cerrado la asistencia del dia',
  ok: 'Marcada a las {{datetime}}'
};

const buttonText: Record<MarkStateOptions, string> = {
  bad: 'Marcar Asistencia',
  lock: 'Marcar Asistencia',
  ok: 'Cerrar Ventana',
  loading: ''
};

export default MarkState;

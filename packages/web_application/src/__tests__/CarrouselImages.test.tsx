import * as React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import CarrouselImages from '../components/molecules/CarrouselImages';

test('Renderizando flecha de retroceso', async () => {
  const images = [
    'https://static1-es.millenium.gg/articles/4/35/91/4/@/166681-honkai-impact-3rd-orig-2-article_image_bd-1.jpg',
    'https://media.vandal.net/i/1280x720/4-2021/202142610103654_1.jpg.webp'
  ];

  const screen = render(<CarrouselImages images={images} />);

  const arrowRight = screen.getByTestId('arrow-right');

  fireEvent.press(arrowRight);

  const arrowLeft = screen.getByTestId('arrow-left')
    ? screen.getByTestId('arrow-left')
    : undefined;

  expect(arrowLeft).not.toBeUndefined();
});

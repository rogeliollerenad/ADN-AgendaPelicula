/* eslint-disable react/jsx-props-no-spreading, @typescript-eslint/no-var-requires, global-require */

import React from 'react';
import {
  CardItem,
  CardItemProps,
} from 'pages/FilmMenu/components/Cards/CardItem/index';
import { render } from '@testing-library/react';

jest.mock('react-intersection-observer', () => {
  const { factory } = require('tests/mocks/react-intersection-observer.mock');
  return factory();
});

describe('CardItem Test', () => {
  let props: CardItemProps;

  beforeEach(() => {
    props = {
      idFilm: 2,
      title: 'Its over',
      cover: 'movie5.jpg',
      highLight: 'Lorem',
      released: '10/20/2000',
      score: '4,5',
      time: 170,
      description:
        'European mercenaries searching for black powder become embroiled in the defense of Its over of China against a horde of monstrous creatures',
      onSelected: jest.fn(),
      disabled: false,
      buttonText: 'Texto Buttom',
    };
  });

  it('should match snapshot', () => {
    const { container } = render(<CardItem {...props} />);
    expect(container).toMatchSnapshot();
  });
});

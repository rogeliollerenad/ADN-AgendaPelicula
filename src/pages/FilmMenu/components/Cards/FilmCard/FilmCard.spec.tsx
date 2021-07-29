/* eslint-disable react/jsx-props-no-spreading, @typescript-eslint/no-var-requires, global-require */

import React from 'react';
import {
  FilmCard,
  FilmCardProps,
} from 'pages/FilmMenu/components/Cards/FilmCard/index';
import { render } from '@testing-library/react';

jest.mock('react-intersection-observer', () => {
  const { factory } = require('tests/mocks/react-intersection-observer.mock');
  return factory();
});

describe('FilmCard Test', () => {
  let props: FilmCardProps;

  beforeEach(() => {
    props = {
      film: {
        price: 4.3,
        name: 'Jhon Wick',
        cover: 'film.jpg',
        description: 'some description',
        time: 120,
        score: '4,5',
        released: '08/12/2020',
        type: 'ACCION'
      },
      onFilmSelected: jest.fn(),
    };
  });

  it('should match snapshot', () => {
    const { container } = render(<FilmCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});

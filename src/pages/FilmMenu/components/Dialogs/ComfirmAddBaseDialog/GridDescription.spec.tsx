/* eslint-disable react/jsx-props-no-spreading, @typescript-eslint/no-var-requires, global-require */

import { render } from '@testing-library/react';
import MockDate from 'mockdate';
import {
  GridDescription,
  PropsDataDescription,
} from 'pages/FilmMenu/components/Dialogs/ComfirmAddBaseDialog/GridDescription';
import React from 'react';

jest.mock('react-intersection-observer', () => {
  const { factory } = require('tests/mocks/react-intersection-observer.mock');
  return factory();
});

describe('GridDescription Test', () => {
  let props: PropsDataDescription;

  beforeAll(() => {
    MockDate.set('2020-10-31');
  });

  afterAll(() => {
    MockDate.reset();
  });

  beforeEach(() => {
    props = {
      description: 'Lorem Ipsum',
      title: 'Titulo Testing',
      released: '10/20/2000',
      time: 120,
      score: '3.5',
      price: 10,
    };
  });

  it('should match snapshot', () => {
    const { container } = render(<GridDescription {...props} />);
    expect(container).toMatchSnapshot();
  });
});

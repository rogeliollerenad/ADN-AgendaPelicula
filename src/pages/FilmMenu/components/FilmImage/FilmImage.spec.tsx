import React from 'react';
import { render } from '@testing-library/react';
import { FilmImage } from '.';

describe('FilmImage Test', () => {
  it('should match snapshot', () => {
    const { container } = render(<FilmImage cover="film.jpg" />);
    expect(container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import React from 'react';
import MockDate from 'mockdate';
import { MaterialUIPickers } from './index';

describe('Prueba Calendario', () => {
  const setSelectedDate = jest.fn();
  const selectedDate = new Date('2010-12-17T03:24:00');

  const props = {
    setSelectedDate,
    selectedDate,
  };

  it('should match snapshot', () => {
    const { container } = render(<MaterialUIPickers {...props} />);
    expect(container).toMatchSnapshot();
  });
});

import React, { useEffect, useState } from 'react';
import moment from 'moment';

const CalcularPrecio = (price: number, selectedDate: Date | null) => {
  const [showPrice, setShowPrice] = React.useState<number>(price);
  useEffect(() => {
    const dateHour = moment(selectedDate);
    const weekDay = dateHour.isoWeekday();
    const hour = moment(dateHour.format('LT'), 'h:mma');
    const hourLimit = moment('8:00pm', 'h:mma');
    const dayLimit = 6;
    const porcen10 = 1.1;
    const porcen15 = 1.15;

    setShowPrice(price);
    if (weekDay <= dayLimit && hour.isAfter(hourLimit)) {
      setShowPrice(price * porcen10);
    }
    if (weekDay > dayLimit) {
      setShowPrice(price * porcen15);
    }
  }, [price, selectedDate]);
  return {
    showPrice,
  };
};

export default CalcularPrecio;

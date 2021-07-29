import React from 'react';
import currencyFormatter from 'currency-formatter';
import { FilmOrderModel } from 'pages/FilmMenu/models/FilmOrderModel';
import { QuantityButton } from 'pages/FilmMenu/components/Buttons/QuantityButton';
import { CardItemSmall } from '../CardItemSmall';

export interface OrderCardProps {
  cartItem: FilmOrderModel;
  onQuantityChange: (quantity: 1 | -1) => void;
  isPreparing: boolean;
}

export const OrderCard: React.FC<OrderCardProps> = ({
  cartItem: { quantity, film },
  onQuantityChange,
  isPreparing,
}) => {
  // const classes = useStyles();
  return (
    <CardItemSmall
      coverImg={film.cover}
      title={film.name}
      description={currencyFormatter.format(film.price, { code: 'USD' })}
      descriptionBold
      descriptionDirection="column"
    >
      {!isPreparing && (
        <QuantityButton
          onQuantityChange={onQuantityChange}
          quantity={quantity}
        />
      )}
    </CardItemSmall>
  );
};

import React, { useState } from 'react';
import currencyFormatter from 'currency-formatter';
import { FilmModel } from 'pages/FilmMenu/models/FilmModel';
import { QuantityButton } from 'pages/FilmMenu/components/Buttons/QuantityButton';
import { ConfirmAddBaseDialog } from '../ComfirmAddBaseDialog';
import { ConfirmationButton } from '../../Buttons/ConfirmationButton';

export interface FilmConfirmAddDialogProps {
  film?: FilmModel;
  open: boolean;
  onClose: () => void;
  onAddFilmOrder: (film: FilmModel, quantity: number) => void;
}

export const FilmConfirmAddDialog: React.FC<FilmConfirmAddDialogProps> = ({
  film,
  onClose,
  onAddFilmOrder,
  open,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!film) {
    return null;
  }
  const getButtonLabel = (): string => {
    const formatted = currencyFormatter.format(quantity * film.price, {
      code: 'USD',
    });
    return `Pagar ${formatted}`;
  };

  const handleClose = (): void => {
    setQuantity(1);
    onClose();
  };

  return (
    <ConfirmAddBaseDialog
      open={open}
      onClose={handleClose}
      title={film.name}
      description={film.description}
      coverImage={film.cover}
      time={film.time}
      released={film.released}
      score={film.score}
      price={film ? film.price : 0}
    >
      <ConfirmationButton
        LeftElement={
          <QuantityButton
            disabledRest={quantity <= 1}
            onQuantityChange={(value) => setQuantity(quantity + value)}
            quantity={quantity}
          />
        }
        onClick={() => {
          onAddFilmOrder(film, quantity);
          handleClose();
        }}
        buttonLabel={getButtonLabel()}
      />
    </ConfirmAddBaseDialog>
  );
};

import { FilmModel } from 'pages/FilmMenu/models/FilmModel';
import React from 'react';
import { ConfirmAddBaseDialog } from '../ComfirmAddBaseDialog';

export interface FilmConfirmAddDialogProps {
  film?: FilmModel;
  open: boolean;
  onClose: () => void;
}

export const FilmConfirmAddDialog: React.FC<FilmConfirmAddDialogProps> = ({
  film,
  onClose,
  open,
}) => {
  if (!film) {
    return null;
  }

  const handleClose = (): void => {
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
    />
  );
};

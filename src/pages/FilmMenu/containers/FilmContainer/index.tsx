import { Grid } from '@material-ui/core';
import { FilmCard } from 'pages/FilmMenu/components/Cards/FilmCard';
import { FilmConfirmAddDialog } from 'pages/FilmMenu/components/Dialogs/FilmConfirmAddDialog';
import { FilmMenuContext } from 'pages/FilmMenu/context/FilmMenuContext';
import { FilmModel } from 'pages/FilmMenu/models/FilmModel';
import React, { useContext, useState } from 'react';
import { useStyles } from './styles';

export const FilmContainer: React.FC = () => {
  const {
    data: { filmMenu },
  } = useContext(FilmMenuContext);

  const [confirmFilm, setConfirmFilm] = useState<FilmModel>();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = (film: FilmModel) => {
    setOpenDialog(true);
    setConfirmFilm(film);
  };

  return (
    <>
      <Grid container spacing={2}>
        {filmMenu &&
          filmMenu.map((film) => (
            <FilmCard onFilmSelected={handleDialog} key={film.id} film={film} />
          ))}
      </Grid>
      <FilmConfirmAddDialog
        film={confirmFilm}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </>
  );
};

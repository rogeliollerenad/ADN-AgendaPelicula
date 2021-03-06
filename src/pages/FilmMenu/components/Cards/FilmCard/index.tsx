import React from 'react';
import currencyFormatter from 'currency-formatter';
import { FilmModel } from 'pages/FilmMenu/models/FilmModel';
import { CardItem } from '../CardItem';

export interface FilmCardProps {
  film: FilmModel;
  onFilmSelected: (film: FilmModel) => void;
  className?: string;
}

export const FilmCard: React.FC<FilmCardProps> = ({ film, onFilmSelected }) => {
  return (
    <>
      <CardItem
        idFilm={film.id || 0}
        title={film.name}
        description={film.description}
        highLight={currencyFormatter.format(film.price, { code: 'USD' })}
        cover={film.cover}
        released={film.released}
        time={film.time}
        score={film.score}
        buttonText="Comprar"
        onSelected={() => {
          onFilmSelected(film);
        }}
      />
    </>
  );
};

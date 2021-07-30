import { FilmModel } from 'pages/FilmMenu/models/FilmModel';
import { FilmTypeEnum } from 'pages/FilmMenu/models/FilmTypeEnum';
import cloneDeep from 'lodash/cloneDeep';

export const getSingle = (film?: Partial<FilmModel>): FilmModel =>
  cloneDeep({
    cover: 'cover.jpg',
    price: 30.2,
    name: 'Jhon Wick',
    type: FilmTypeEnum.ACCION,
    description: 'jhon Wick',
    released: '12/12/2017',
    time: 120,
    score: '4,5',
    ...film,
  });

export const getList = (...films: Partial<FilmModel>[]): FilmModel[] => {
  if (films.length === 0) {
    return cloneDeep([getSingle()]);
  }
  return films.map((partial) => getSingle(partial));
};

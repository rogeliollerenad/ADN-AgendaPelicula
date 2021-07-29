import axios from 'axios';
import { FilmTypeEnum } from 'pages/FilmMenu/models/FilmTypeEnum';
import { MenuModel } from 'pages/FilmMenu/models/MenuModel';
import { FilmModel } from 'pages/FilmMenu/models/FilmModel';

export const listFilm = (type?: FilmTypeEnum): Promise<MenuModel> =>
  axios
    .get<MenuModel>('/film', { params: { type } })
    .then((res) => res.data);

export const filterFilmByType = (
  films: FilmModel[],
  type: FilmTypeEnum,
): FilmModel[] => films.filter((film) => film.type === type);

export const filterMenuByType = (
  menu: MenuModel,
  type?: FilmTypeEnum | null,
): MenuModel => {
  if (!type) {
    return menu;
  }
  return {
    films: filterFilmByType(menu.films, type),
  };
};

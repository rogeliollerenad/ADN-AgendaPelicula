import React, { createContext, useEffect, useState } from 'react';
import * as filmService from '../services/filmService';
import { FilmModel } from '../models/FilmModel';
import { FilmTypeEnum } from '../models/FilmTypeEnum';
import { MenuModel } from '../models/MenuModel';

export interface FilmMenuState {
  films?: FilmModel[];
  filmType?: FilmTypeEnum;
  allMenu?: MenuModel;
}

export const useStateContainer = (initialState: FilmMenuState = {}) => {
  const [allMenu, setAllMenu] = useState(initialState.allMenu || { films: [] });
  const [filmMenu, setFilmMenu] = useState(initialState.films || []);

  const [filmType, setFilmType] = useState(initialState.filmType || null);
  useEffect(() => {
    filmService.listFilm().then((menu) => setAllMenu(menu));
  }, []);

  useEffect(() => {
    const { films: filteredFilms } = filmService.filterMenuByType(
      allMenu,
      filmType,
    );
    setFilmMenu(filteredFilms);
  }, [allMenu, filmType]);

  return {
    data: { filmMenu, filmType, allMenu },
    mutations: { setFilmType },
  };
};

export const FilmMenuContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export interface FilmProviderProps {
  initialState?: FilmMenuState;
}
export const FilmMenuProvider: React.FC<FilmProviderProps> = ({
  children,
  initialState = {},
}) => {
  const contextValue = useStateContainer(initialState);
  return (
    <FilmMenuContext.Provider value={contextValue}>
      {children}
    </FilmMenuContext.Provider>
  );
};

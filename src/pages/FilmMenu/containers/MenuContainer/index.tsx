import React, { useContext } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
} from '@material-ui/core';
import { FilmMenuContext } from 'pages/FilmMenu/context/FilmMenuContext';
import { FilmTypeEnum } from 'pages/FilmMenu/models/FilmTypeEnum';
import {
  GiTicket,
  GiDualityMask,
  GiMountains,
  GiPoliceCar,
} from 'react-icons/gi';
import LogoCinema from 'assets/image/cinema.png';
import { useStyles } from './styles';
import './scss/style.scss';

export const MenuContainer: React.FC = () => {
  const {
    mutations: { setFilmType },
    data: { filmType },
  } = useContext(FilmMenuContext);
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.stick} spacing={0} direction="row">
        <Grid container item xs={12} md={4} lg={4} className="wrap-menulogo">
          <img src={LogoCinema} alt="LogoCinema" style={{ width: '37%' }} />
        </Grid>
        <Grid container item xs={12} md={8} lg={8} className="menu">
          <BottomNavigation
            className="menu-items"
            value={filmType}
            onChange={(event, newValue) => {
              setFilmType(newValue);
            }}
            showLabels
          >
            <BottomNavigationAction
              value={null}
              data-cy="menu-all"
              label="Todos"
              icon={<GiTicket size="35" />}
            />
            <BottomNavigationAction
              label="Acción"
              data-cy="menu-accion"
              value={FilmTypeEnum.ACCION}
              className="menu-item"
              icon={<GiPoliceCar size="35" />}
            />
            <BottomNavigationAction
              label="Aventura"
              data-cy="menu-aventura"
              value={FilmTypeEnum.AVENTURA}
              className="menu-item"
              icon={<GiMountains size="35" />}
            />
            <BottomNavigationAction
              label="Drama"
              data-cy="menu-drama"
              value={FilmTypeEnum.DRAMA}
              className="menu-item"
              icon={<GiDualityMask size="35" />}
            />
          </BottomNavigation>
        </Grid>
      </Grid>
    </>
  );
};

import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { SessionContext } from 'context/SessionContext';
import { MenuContainer } from './containers/MenuContainer';
import { FilmMenuProvider } from './context/FilmMenuContext';
import { FilmContainer } from './containers/FilmContainer';
import { OrderProvider } from './context/OrderContext';
import { useStyles } from './styles';

export const FilmMenuPage: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  const {
    data: { username },
  } = useContext(SessionContext);
  return (
    <Container maxWidth="md" disableGutters>
      <OrderProvider>
        <FilmMenuProvider>
          <MenuContainer />
          <div className={classes.container}>
            <h2>{username}</h2>
            <FilmContainer />
          </div>
        </FilmMenuProvider>
      </OrderProvider>
    </Container>
  );
};

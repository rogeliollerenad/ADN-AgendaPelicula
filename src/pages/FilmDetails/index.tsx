import { Container } from '@material-ui/core';
import { MenuContainer } from 'pages/FilmMenu/containers/MenuContainer';
import { FilmMenuProvider } from 'pages/FilmMenu/context/FilmMenuContext';
import React from 'react';

export const FilmDetails: React.FC = () => {
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <FilmMenuProvider>
          <MenuContainer />
          <div>
            <h2>HOLA</h2>
          </div>
        </FilmMenuProvider>
      </Container>
    </>
  );
};

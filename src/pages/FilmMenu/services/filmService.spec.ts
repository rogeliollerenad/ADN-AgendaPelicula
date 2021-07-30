import nock from 'nock';
import { MenuModel } from 'pages/FilmMenu/models/MenuModel';
import * as filmFixture from 'tests/fixtures/film.fixture';
import { FilmTypeEnum } from 'pages/FilmMenu/models/FilmTypeEnum';
import * as filmService from './filmService';

describe('film service test', () => {
  let menu: MenuModel;

  beforeEach(() => {
    menu = {
      films: filmFixture.getList({ type: FilmTypeEnum.ACCION }),
    };
  });
  it('should fetch filmMenu', async () => {
    nock('http://localhost')
      .get('/film')
      .query({ type: FilmTypeEnum.DRAMA })
      .reply(200, menu);
    const data = await filmService.listFilm(FilmTypeEnum.DRAMA);
    expect(data).toEqual(menu);
  });

  it('should filter filmMenu', () => {
    const expectedMenu: MenuModel = {
      films: [],
    };
    const filtered = filmService.filterMenuByType(menu, FilmTypeEnum.DRAMA);
    expect(filtered).toEqual(expectedMenu);
  });
});

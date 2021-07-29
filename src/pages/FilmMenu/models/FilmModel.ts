import { FilmTypeEnum } from 'pages/FilmMenu/models/FilmTypeEnum';

export interface FilmModel {
  id?: number;
  name: string;
  price: number;
  cover: string;
  released : string;
  time: number;
  score: string;
  type: FilmTypeEnum;
  description: string;
}

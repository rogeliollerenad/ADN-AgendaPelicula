import { Button, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import 'moment/locale/es';
import { FilmImage } from 'pages/FilmMenu/components/FilmImage';
import React from 'react';
import { GiBackwardTime } from 'react-icons/gi';
import { useInView } from 'react-intersection-observer';
import Moment from 'react-moment';
import './scss/custom.scss';

Moment.globalLocale = 'es';
Moment.globalLocal = true;

export interface CardItemProps {
  idFilm: number;
  title: string;
  description: string;
  highLight: string;
  cover: string;
  released: string;
  time: number;
  score: string;
  buttonText: string;
  onSelected: () => void;
  disabled?: boolean;
}

export const CardItem: React.FC<CardItemProps> = ({
  idFilm,
  highLight,
  buttonText,
  description,
  cover,
  title,
  time,
  released,
  score,
  disabled,
  onSelected,
}) => {
  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4} ref={ref}>
        <Card>
          <CardActionArea>
            <CardMedia title={title}>
              <FilmImage cover={cover} className="img-card" />
            </CardMedia>
            <CardContent className="card-wrap-content">
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                className="card-wrap-item"
              >
                Estreno:&nbsp;
                <Moment format="ll" locale="es" className="card-item-time">
                  {released}
                </Moment>
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                className="card-wrap-item"
              >
                Calificaci??n:&nbsp;
                <span className="card-item-score">{score}</span>
              </Typography>

              <Typography
                variant="h6"
                color="initial"
                className="card-wrap-item"
              >
                Duraci??n:&nbsp;
                <span className="card-item-time">
                  <GiBackwardTime />
                  {time} Min.
                </span>
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="label-highLight"
              >
                {highLight}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="card-wrap-actions">
            <Button
              size="small"
              color="primary"
              data-cy="select-card"
              className="btn-add"
              disabled={disabled}
              disableRipple
              onClick={() => onSelected()}
            >
              {buttonText}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

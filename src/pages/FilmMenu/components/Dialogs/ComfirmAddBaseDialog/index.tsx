import { Dialog, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Transition } from 'components/Transition';
import 'moment/locale/es';
import { FilmImage } from 'pages/FilmMenu/components/FilmImage';
import React from 'react';
import Moment from 'react-moment';
import { GridDescription } from './GridDescription';
import './scss/style.scss';

Moment.globalLocale = 'es';

export interface ConfirmAddBaseDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  coverImage: string;
  price: number;
  released: string;
  time: number;
  score: string;
}

export const ConfirmAddBaseDialog: React.FC<ConfirmAddBaseDialogProps> = ({
  open,
  onClose,
  description,
  coverImage,
  title,
  released,
  time,
  score,
  price,
  children,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      maxWidth="md"
      keepMounted
      onClose={onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <Card>
        <CardActionArea>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <CardMedia className="dialog-card-img">
                <FilmImage cover={coverImage} />
              </CardMedia>
            </Grid>
            <GridDescription
              description={description}
              title={title}
              released={released}
              time={time}
              score={score}
              price={price}
            />
          </Grid>
        </CardActionArea>
      </Card>
    </Dialog>
  );
};

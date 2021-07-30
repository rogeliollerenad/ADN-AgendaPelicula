import React, { useContext, useEffect } from 'react';
import Moment from 'react-moment';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@material-ui/core';
import { GiRoundStar, GiBackwardTime, GiCalendar } from 'react-icons/gi';
import 'moment/locale/es';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Transition } from 'components/Transition';
import { ButtonClose } from 'pages/FilmMenu/components/Buttons/ButtonClose';
import { MaterialUIPickers } from 'pages/FilmMenu/components/Calendar';
import { FilmImage } from 'pages/FilmMenu/components/FilmImage';
import { useStyles } from './styles';
import './scss/style.scss';

Moment.globalLocale = 'es';
Moment.globalLocal = true;

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
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );
  const [showPrice, setShowPrice] = React.useState<number>(0);

  useEffect(() => {
    const dateHour = moment(selectedDate);
    const weekDay = dateHour.isoWeekday();
    const hour = dateHour.format('LT');

    setShowPrice(price);
    if (weekDay <= 6 && hour > '20:00') {
      setShowPrice(price * 1.1);
    }
    if (weekDay > 6) {
      setShowPrice(price * 1.15);
    }

    console.log(selectedDate);
    console.log(price);
  }, [selectedDate, price]);

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
            <Grid item xs={12} sm={8}>
              <CardContent>
                <Typography
                  gutterBottom
                  component="h2"
                  className="dialog-card-title"
                >
                  {title}
                </Typography>
                <Typography
                  color="textSecondary"
                  component="p"
                  className="dialog-card-description"
                >
                  {description}
                </Typography>

                <Grid
                  container
                  spacing={2}
                  className="dialog-card-details-wrap"
                >
                  <Grid item xs={12} sm={3}>
                    <Typography
                      color="textSecondary"
                      component="p"
                      className="dialog-card-details-items"
                    >
                      <GiRoundStar /> {score}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Typography
                      color="textSecondary"
                      component="p"
                      className="dialog-card-details-items"
                    >
                      <GiBackwardTime /> {time} &nbsp; Min.
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography
                      color="textSecondary"
                      component="p"
                      className="dialog-card-details-items"
                    >
                      <GiCalendar />
                      <Moment format="ll" locale="es">
                        {released}
                      </Moment>
                    </Typography>
                  </Grid>

                  <MaterialUIPickers
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />

                  <Grid
                    item
                    xs={12}
                    container
                    className="dialog-card-wrap-price"
                  >
                    <Grid item xs={12} sm={6}>
                      <Typography
                        color="textSecondary"
                        component="p"
                        className="dialog-card-price"
                      >
                        <span style={{ color: '#000' }}>Cantidad: </span>
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography
                        color="textSecondary"
                        component="p"
                        className="dialog-card-price"
                      >
                        <span style={{ color: '#000' }}>Precio: </span>
                        {showPrice}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {children}
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Dialog>
  );
};

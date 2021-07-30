import { Dialog, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Transition } from 'components/Transition';
import currencyFormatter from 'currency-formatter';
import moment from 'moment';
import 'moment/locale/es';
import { MaterialUIPickers } from 'pages/FilmMenu/components/Calendar';
import { FilmImage } from 'pages/FilmMenu/components/FilmImage';
import React, { useEffect } from 'react';
import { GiBackwardTime, GiCalendar, GiRoundStar } from 'react-icons/gi';
import Moment from 'react-moment';
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
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );
  const [showPrice, setShowPrice] = React.useState<number>(0);

  useEffect(() => {
    const dateHour = moment(selectedDate);
    const weekDay = dateHour.isoWeekday();
    const hour = dateHour.format('LT');

    const hourLimit = '20:00';
    const dayLimit = 6;
    const porcen10 = 1.1;
    const porcen15 = 1.15;

    setShowPrice(price);
    if (weekDay <= dayLimit && hour > hourLimit) {
      setShowPrice(price * porcen10);
    }
    if (weekDay > dayLimit) {
      setShowPrice(price * porcen15);
    }
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
                    <Grid item xs={12} sm={12}>
                      <Typography
                        color="textSecondary"
                        component="p"
                        className="dialog-card-price"
                      >
                        <span style={{ color: '#000' }}>Precio Final: </span>
                        {currencyFormatter.format(showPrice, { code: 'USD' })}
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

import { CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { GiBackwardTime, GiCalendar, GiRoundStar } from 'react-icons/gi';
import Moment from 'react-moment';
import { MaterialUIPickers } from 'pages/FilmMenu/components/Calendar';
import CalcularPrecio from 'utils/useCalcularPrecio';
import currencyFormatter from 'currency-formatter';

export interface PropsDataDescription {
  description: string;
  title: string;
  released: string;
  time: number;
  score: string;
  price: number;
}

export const GridDescription: React.FC<PropsDataDescription> = ({
  description,
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
  const showPrice = CalcularPrecio(price, selectedDate);

  return (
    <>
      <Grid item xs={12} sm={8}>
        <CardContent>
          <Typography gutterBottom component="h2" className="dialog-card-title">
            {title}
          </Typography>
          <Typography
            color="textSecondary"
            component="p"
            className="dialog-card-description"
          >
            {description}
          </Typography>

          <Grid container spacing={2} className="dialog-card-details-wrap">
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

            <Grid item xs={12} container className="dialog-card-wrap-price">
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
    </>
  );
};

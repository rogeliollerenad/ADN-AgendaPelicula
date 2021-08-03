import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import 'date-fns';
import 'moment/locale/es';
import React, { Dispatch, SetStateAction } from 'react';

export interface PropsCalendar {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}
export const MaterialUIPickers: React.FC<PropsCalendar> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container style={{ justifyContent: 'space-around' }}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            data-cy="select-day"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            data-testid="day_picker"
            label="Selecciona Fecha"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            data-cy="select-hour"
            label="Selecciona Hora"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </>
  );
};

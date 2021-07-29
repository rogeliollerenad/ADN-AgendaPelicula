import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useStyles } from './styles';

export interface ConfirmationButtonProps {
  LeftElement: React.ReactElement;
  onClick: () => void;
  buttonLabel: string;
  disabled?: boolean;
}
export const ConfirmationButton: React.FC<ConfirmationButtonProps> = ({
  LeftElement,
  onClick,
  buttonLabel,
  disabled,
}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className="dialog-wrap-button-quantity">
      <Grid item xs={12} sm={6}>
        {React.cloneElement(LeftElement)}
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          color="primary"
          disabled={disabled}
          className={classes.button}
          variant="contained"
          onClick={() => {
            onClick();
          }}
        >
          {buttonLabel}
        </Button>
      </Grid>
    </Grid>
  );
};

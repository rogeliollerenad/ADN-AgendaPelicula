import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import { Transition } from 'components/Transition';
import { ButtonAtBottom } from 'pages/FilmMenu/components/Buttons/ButtonAtBottom';
import { ButtonClose } from 'pages/FilmMenu/components/Buttons/ButtonClose';
import { FilmOrderModel } from 'pages/FilmMenu/models/FilmOrderModel';
import { OrderCard } from 'pages/FilmMenu/components/Cards/OrderCard';
import { FilmModel } from 'pages/FilmMenu/models/FilmModel';
import { useStyles } from './styles';

const FilmOrderList: React.FC<{
  films: FilmOrderModel[];
  isPreparing: boolean;
  modifyFilmQuantity: (film: FilmModel, quantity: 1 | -1) => void;
}> = ({ films, modifyFilmQuantity, isPreparing }) => {
  if (films.length <= 0) {
    return null;
  }
  return (
    <>
      <Typography style={{ padding: '10px', fontWeight: 700 }}>
        Films
      </Typography>
      {films.map((cartItem) => (
        <OrderCard
          key={cartItem.film.id}
          cartItem={cartItem}
          isPreparing={isPreparing}
          onQuantityChange={(quantity) => {
            modifyFilmQuantity(cartItem.film, quantity);
          }}
        />
      ))}
    </>
  );
};


export interface OrderDialogProps {
  onClose: () => void;
  open: boolean;
  totalAmount: number;
  totalItems: number;
  films: FilmOrderModel[];
  modifyFilmQuantity: (film: FilmModel, quantity: 1 | -1) => void;
  clearOrder: () => void;
  onCreateOrder: () => void;
  isPreparing: boolean;
}

export const OrderDialog: React.FC<OrderDialogProps> = ({
  onClose,
  open,
  totalItems,
  totalAmount,
  films,
  modifyFilmQuantity,
  clearOrder,
  onCreateOrder,
  isPreparing,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      fullScreen
      classes={{ paper: classes.paper }}
      className={classes.dialog}
      open={open}
      onClose={onClose}
      aria-labelledby="Your Order"
      aria-describedby="Confirm your order"
    >
      <ButtonClose onClick={onClose} />
      <DialogTitle className={classes.titleContainer}>
        <span className={classes.title}>Your Order</span>
      </DialogTitle>
      <DialogContent className={classes.listContainer}>
        {films.length > 0  ? (
          <>
            <FilmOrderList
              films={films}
              modifyFilmQuantity={modifyFilmQuantity}
              isPreparing={isPreparing}
            />

            <Button
              style={{ margin: '15px', width: '-webkit-fill-available' }}
              fullWidth
              color="primary"
              disabled={isPreparing}
              onClick={() => clearOrder()}
            >
              Clear Order
            </Button>
          </>
        ) : (
          <div className={classes.noItemsContainer}>
            <div className={classes.noItemsContainerInner}>
              <span>
                <ShoppingBasket />
              </span>
              <Typography variant="body1" className={classes.noItemsLabel}>
                You still do not have any product in your order
              </Typography>
            </div>
          </div>
        )}
      </DialogContent>
      <ButtonAtBottom
        zIndex={101}
        badgeNumber={totalItems}
        amount={totalAmount}
        text={!isPreparing ? 'Confirm order' : 'Preparing...'}
        onClick={() => onCreateOrder()}
        disabled={totalItems <= 0 || isPreparing}
      />
    </Dialog>
  );
};

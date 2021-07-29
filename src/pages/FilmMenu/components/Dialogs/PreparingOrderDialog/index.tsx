import React from 'react';
import { Transition } from 'components/Transition';
import { Dialog, Typography } from '@material-ui/core';
import { ButtonClose } from 'pages/FilmMenu/components/Buttons/ButtonClose';
import PreparingFood from 'assets/image/preparing-food.gif';

interface PreparingOrderDialogProps {
  onClose: () => void;
  open: boolean;
}

export const PreparingOrderDialog: React.FC<PreparingOrderDialogProps> = ({
  onClose,
  open,
}) => {
  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      fullScreen
      open={open}
      onClose={onClose}
      aria-labelledby="Su pedido"
      aria-describedby="Confirma tu orden"
    >
      <ButtonClose onClick={onClose} />
      <img
        alt="Preparando film"
        style={{ marginTop: '35px', width: '100%', height: 'auto' }}
        src={PreparingFood}
      />
      <Typography
        style={{ fontSize: '1.3rem', fontWeight: 700, textAlign: 'center' }}
      >
        Estamos preparando tu pedido
      </Typography>
    </Dialog>
  );
};

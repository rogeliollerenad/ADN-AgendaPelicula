import React, { createContext, useContext, useEffect, useState } from 'react';
import { FilmModel } from 'pages/FilmMenu/models/FilmModel';
import * as filmOrderService from 'pages/FilmMenu/services/filmOrderService';
import * as orderService from 'pages/FilmMenu/services/orderService';
import { OrderStateModel } from 'pages/FilmMenu/context/models/OrderStateModel';
import { SessionContext } from 'context/SessionContext';

export const useStateContainer = (
  initialState: { order: OrderStateModel; isPreparing?: boolean },
  sessionContext: typeof SessionContext,
) => {
  const {
    data: { sessionId },
  } = useContext(sessionContext);

  const [order, setOrder] = useState<OrderStateModel>(initialState.order);
  const [isPreparing, setIsPreparing] = useState(
    initialState.isPreparing || false,
  );
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    orderService.persistOrder(order);
  }, [order]);

  const updateFilmOrder = (film: FilmModel, quantity: number) => {
    setOrder({
      films: filmOrderService.saveToOrderList(film, quantity, order.films),
    });
  };

  const getTotalAmount = (): number => {
    return filmOrderService.getTotal(order.films);
  };

  const sendOrder = (): Promise<void> => {
    return orderService
      .createOrder(order, sessionId)
      .then(() => {
        setIsPreparing(true);
        /* setTimeout(() => {
          setIsPreparing(false);
          setOrder({ promotions: [], foods: [] });
          setShowConfirmation(true);
        }, 5000); */
      })
      .catch((err) => console.log(err.response));
  };

  const getTotalItems = (): number => {
    return filmOrderService.getRealOrderCount(order.films);
  };

  const clearOrder = () => {
    setOrder({ films: [] });
  };

  return {
    data: { order, isPreparing, showConfirmation },
    computed: {
      get totalAmount(): number {
        return getTotalAmount();
      },
      get totalItems(): number {
        return getTotalItems();
      },
    },
    mutations: {
      updateFilmOrder,
      clearOrder,
      sendOrder,
      setShowConfirmation,
    },
  };
};

export const OrderContext = createContext<ReturnType<typeof useStateContainer>>(
  {} as never,
);

export const OrderProvider: React.FC = ({ children }) => {
  const contextValue = useStateContainer(
    {
      order: orderService.restoreOrder(),
      isPreparing: false,
    },
    SessionContext,
  );
  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};

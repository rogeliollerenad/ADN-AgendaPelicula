import { FilmOrderModel } from 'pages/FilmMenu/models/FilmOrderModel';
import { FilmModel } from 'pages/FilmMenu/models/FilmModel';

export const modifyQuantity = (
  cartItem: FilmOrderModel,
  quantity: number,
  orderList: FilmOrderModel[],
): FilmOrderModel[] => {
  const clonedOrder = [...orderList];
  const newCartItem = { ...cartItem };
  newCartItem.quantity += quantity;
  const idx = clonedOrder.findIndex(
    (item) => item.film.id === cartItem.film.id,
  );
  if (newCartItem.quantity > 0) {
    clonedOrder.splice(idx, 1, newCartItem);
  } else {
    clonedOrder.splice(idx, 1);
  }
  return clonedOrder;
};

export const saveToOrderList = (
  film: FilmModel,
  quantity: number,
  orderList: FilmOrderModel[],
): FilmOrderModel[] => {
  const clonedOrder = [...orderList];
  const foundItem = clonedOrder.find((item) => item.film.id === film.id);
  if (foundItem) {
    return modifyQuantity(foundItem, quantity, clonedOrder);
  }
  return [...clonedOrder, { film, quantity }];
};

export const getRealOrderCount = (orderList: FilmOrderModel[]): number =>
  orderList.reduce((total, { quantity }) => total + quantity, 0);

export const getTotal = (orderList: FilmOrderModel[]): number =>
  orderList.reduce(
    (total, { quantity, film: { price } }) => total + quantity * price,
    0,
  );

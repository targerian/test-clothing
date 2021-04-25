import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //this is an input selecor "takes no CreateSelector function"

export const SelectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const SelectCartItemsCount = createSelector(
  [SelectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumelatedQuantity, cartItem) =>
        accumelatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCurrentHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsTotal = createSelector(
  [SelectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumelatedPrice, cartItem) => accumelatedPrice + (cartItem.price * cartItem.quantity),
      0
    )
);

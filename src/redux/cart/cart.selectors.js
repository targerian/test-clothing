import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //this is an input selecor "takes no CreateSelector function"

export const SelectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const SelectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce(
        (accumelatedQuantity, cartItem) => accumelatedQuantity + cartItem.quantity,
        0
      )
)

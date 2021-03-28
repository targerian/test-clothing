export const addItemToCart = (CartItems, cartItemToAdd) => {
  const excitingCartItem = CartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  //this should return true if the id of the cartItemToAdd actually matched one of
  //the items in the array.. itll return null if otherwise
  if(excitingCartItem){
      return CartItems.map(cartItem => 
        cartItem.id === cartItemToAdd.id ?
        {...cartItem, quantity : cartItem.quantity + 1} 
        : cartItem
        )
  }
  return [...CartItems, {...cartItemToAdd, quantity: 1} ]
  //this will asssign the quaninity of any item added to the cart, leh?
  //because the firt item will give "extiting cart item" a false so this funciton
  //will return the cartItems array which is ampty + the cartItemToAdd with a quantitiy property of 1
  //so this way the quaninty property will be created
};

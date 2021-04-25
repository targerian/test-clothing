
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
  //because the firt item will give "extiting cart item" a false so this funciton, 3ashan mafish cartitem.id == cartItem to add.id 3ashan cart item [] fadya aslan
  //will return the cartItems array which is ampty + the cartItemToAdd with a quantitiy property of 1
  //so this way the quaninty property will be created
};

export const removeItemFromCart = (cartItems,cartItemToRemove) =>{
  const excitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
  //this will not return boolean, this will return the first "cartItem" that its id is equal to cart to remove id.

  if (excitingCartItem.quantity == 1 ){
    return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map(cartItem => 
      cartItem.id === cartItemToRemove.id?
      {...cartItem, quantity: cartItem.quantity - 1}:
      cartItem
    );

}

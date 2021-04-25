import React from "react";
import CustomButton from "../button-component/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { SelectCartItems } from "../../redux/cart/cart.selectors";
import {Link} from "react-router-dom";
import ToggleCartvisibility from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems,dispatch}) => {
  console.log(dispatch);
  return(
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
        cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      )):
      <span className="empty-message">Your cart is empty!</span>
      }
    </div>
    <Link className="" to="/checkout" >
    <CustomButton onClick={()=> dispatch(ToggleCartvisibility())} >GO TO CHECKOUT</CustomButton>
    </Link>
  </div>
)};

const mapStateToProps = (state) => ({
  cartItems: SelectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);

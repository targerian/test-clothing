import React from "react";
import "./shop-bag.styles.scss";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";
import { ToggleCartvisibility } from "../../redux/cart/cart.action";
import { SelectCartItemsCount } from "../../redux/cart/cart.selectors";
const CartIcon = ({ ToggleCartvisibility, itemCount }) => (
  <div className="cart-icon" onClick={ToggleCartvisibility}>
    <ShoppingIcon className="shopping-icon " />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCartvisibility: () => dispatch(ToggleCartvisibility()),
});

const mapStateToProps = (state) => ({
  itemCount: SelectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

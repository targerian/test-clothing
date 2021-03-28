import React from "react"; 
import "./shop-bag.styles.scss"
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg"
import { ToggleCartvisibility } from "../../redux/cart/cart.action"
const CartIcon = ({ToggleCartvisibility, cartItems}) => (
    <div className="cart-icon" onClick={ToggleCartvisibility}>
        <ShoppingIcon className="shopping-icon "/>
        <span className="item-count">
            {cartItems.map(cartItem =>(
                cartItem.quantity
            ))}
        </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartvisibility: ()=> dispatch(ToggleCartvisibility())
})

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems,
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
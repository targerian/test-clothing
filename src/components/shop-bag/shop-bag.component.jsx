import React from "react"; 
import "./shop-bag.styles.scss"
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg"
import { ToggleCartvisibility } from "../../redux/cart/cart.action"
const CartIcon = ({ToggleCartvisibility}) => (
    <div className="cart-icon" onClick={ToggleCartvisibility}>
        <ShoppingIcon className="shopping-icon "/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartvisibility: ()=> dispatch(ToggleCartvisibility())
})


export default connect(null,mapDispatchToProps)(CartIcon);
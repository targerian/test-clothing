import React from "react"; 
import "./checkout.styles.scss"
import { connect} from "react-redux";
import { AddItem, ClearItemFromCart, RemoveItem } from "../../redux/cart/cart.action";



const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=> removeItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=> addItem(cartItem)}>&#10095;</div>
            </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=> clearItem(cartItem)}>&#10005;</div>
    </div>
)}
const mapDispatchToProps = dispatch => ({
    clearItem: item=> dispatch(ClearItemFromCart(item)),
    removeItem: item => dispatch(RemoveItem(item)),
    addItem: item => dispatch(AddItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
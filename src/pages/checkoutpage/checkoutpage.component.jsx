import React from 'react';
import "./checkoutpage.component.scss"

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout/checkout.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-btn.component';

const CheckoutPage = ({cartItems,itemTotal}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-blocks">
                <span>Product</span>
            </div>
            <div className="header-blocks">
                <span>Discription</span>
            </div>
            <div className="header-blocks">
                <span>Quantity</span>
            </div>
            <div className="header-blocks">
                <span>Price</span>
            </div>
            <div className="header-blocks">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className="total">
            <span>TOTAL: {itemTotal}</span>
            
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - EXP: 01/25 CVV:123
        </div>
        <StripeCheckoutButton price={itemTotal} />
        
    </div>
)

const mapStateToProps = createStructuredSelector(
    {cartItems : SelectCartItems,
    itemTotal: selectCartItemsTotal}
)

export default connect(mapStateToProps)(CheckoutPage);
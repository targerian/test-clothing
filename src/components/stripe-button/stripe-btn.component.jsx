import React from "react";
import "./stripe-btn.styles.scss";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100 ;
    const publishableKey = "pk_test_51InP4QGMgAnJwro7sA1ItbcSEwVZRfNzjxc8ZOso3gfk6X1NkfFjmOROHEwl7OOzqou9vv6I92wGac8d3x3VfQa700s4r9gDBj";

const onToken = token => {
    console.log(token);
    alert("Payment Successful!")
}

    return (
        <div className="stripe-checkout">
        <StripeCheckout
        label="Pay Now!"
        name = "Ali's Clothing Ltd."
        billingAddress
        shippingAddress
        image = "https://svgshare.com/i/CUz.svg"
        description={`Your total value is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
         />
         </div>
    )
}

export default StripeCheckoutButton;
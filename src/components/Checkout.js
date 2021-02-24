import React from 'react';
import CheckoutForm from './CheckoutForm';



const Checkout = (props) =>{
    const handleCheckout = values => {
        console.log(values)
    }

    return(
        <div>
            <CheckoutForm onSubmit={handleCheckout}/>
        </div>
    )
}




export default Checkout;
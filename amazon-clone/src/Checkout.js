import React from 'react'
import './Checkout.css'
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/OnePlus/hdfc_bank_8_series_1500x250.jpg" 
                    alt=""
                />
                <div className="checkout__title">
                    <h1>Your shopping basket</h1>
                </div>    
            </div>

            <div className="checkout__right">
                <h1>Subtotal</h1>
            </div>
        </div>
    )
}

export default Checkout

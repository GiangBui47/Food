import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="tilte">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="email" placeholder='Email Address' />
                <input type="text" placeholder='Phone' />
                <input type="text" placeholder='Street' />
                <input type="text" placeholder='City' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-detail">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-detail">
                            <p>Delivery Fee</p>
                            <p>${2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-detail">
                            <p>Total</p>
                            <p>${getTotalCartAmount() + 2}</p>
                        </div>
                    </div>
                    <button >Proceed To Payment</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder

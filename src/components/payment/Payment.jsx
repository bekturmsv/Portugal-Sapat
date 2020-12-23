import React from 'react'
import './style.css'
import visa_logo from './img/visa_logo.png'
import mastercard_logo from './img/mastercard_logo.png'
import paypal_logo from './img/paypal_logo.png'

export default function Payment() {
    return (
        <div style={{margin: '200px'}}>
            <div class="checkout-panel">
                <div class="panel-body">
                    <h2 class="title">Checkout</h2>

                    <div class="progress-bar">
                        <div class="step active"></div>
                        <div class="step active"></div>
                        <div class="step"></div>
                        <div class="step"></div>
                    </div>

                    <div class="payment-method">
                        <label for="card" class="method card">
                            <div class="card-logos">
                                <img src={visa_logo} />
                                <img src={mastercard_logo} />
                            </div>

                            <div class="radio-input">
                                <input id="card" type="radio" name="payment" />
                                    Pay £340.00 with credit card
                            </div>
                        </label>

                        <label for="paypal" class="method paypal">
                            <img src={paypal_logo} />
                            <div class="radio-input">
                                <input id="paypal" type="radio" name="payment" />
                                        Pay £340.00 with PayPal
                                  </div>
                        </label>
                    </div>

                    <div class="input-fields">
                        <div class="column-1">
                            <label for="cardholder">Cardholder's Name</label>
                            <input type="text" id="cardholder" />

                            <div class="small-inputs">
                                <div>
                                    <label for="date">Valid thru</label>
                                    <input type="text" id="date" placeholder="MM / YY" />
                                </div>

                                <div>
                                    <label for="verification">CVV / CVC *</label>
                                    <input type="password" id="verification" />
                                </div>
                            </div>

                        </div>
                        <div class="column-2">
                            <label for="cardnumber">Card Number</label>
                            <input type="password" id="cardnumber" />

                            <span class="info">* CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.</span>
                        </div>
                    </div>
                </div>

                <div class="panel-footer">
                    <button class="btn back-btn">Back</button>
                    <button class="btn next-btn">Next Step</button>
                </div>
            </div>
        </div>
    )
}

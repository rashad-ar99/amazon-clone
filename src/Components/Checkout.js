import React from 'react'
import './CSS Components/Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg'
            alt='Offer banner.jpg'
            />

            <div>
                <h2 className='checkout__title'>
                    Your Shopping Basket

                </h2>
            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout
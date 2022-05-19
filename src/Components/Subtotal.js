import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './CSS Components/Subtotal.css'
import { useStateValue } from "./StateProvider";

function Subtotal() {

  const [{basket}, dispatch] = useStateValue();
  
  
  const total = (basket) => {
    let total = 0;  
    for(let i=0;i<basket.length;i++){
        total+=basket[i].price;
      }
      // return total;
      return total;
  }

  return (

    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong> ${total(basket)}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox' /> This order contains a gift
                </small>
              </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
          />   
        
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;
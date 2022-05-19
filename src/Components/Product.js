import React from 'react'
import './CSS Components/Product.css'
import {useStateValue} from './StateProvider'

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const addtToBasket = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating
        },
      });  
    }

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'></p>
            <small>$</small>
            <strong>{price}</strong>
            <div className='product__rating'>
                {Array(rating)
                .fill()
                .map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img src={image}
        alt={title}
        />
        <button onClick={addtToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
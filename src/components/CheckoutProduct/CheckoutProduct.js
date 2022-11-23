import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ item, hideButton }) {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: item.id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img
				src={item.image}
				alt="checkout product"
				className="checkoutProduct__image"
			/>
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{item.title}</p>
				<p className="checkoutProduct__price">
					<small>₹</small>
					<strong>{item.price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(item.rating)
						.fill()
						.map(() => {
							return <p>⭐</p>;
						})}
				</div>
				{!hideButton && (
					<button onClick={removeFromBasket}>Remove from basket</button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;

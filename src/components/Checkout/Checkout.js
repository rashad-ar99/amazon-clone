import React from "react";
import "./Checkout.css";
import checkout_ad from "../../images/checkout_banner.png";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img src={checkout_ad} alt="checkout banner" className="checkout__ad" />
				<h5>Hello, {user ? user.email : "Guestj"}</h5>
				<h2 className="checkout__title">Your shopping basket</h2>
				{basket.map((item) => {
					return <CheckoutProduct item={item} />;
				})}
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;

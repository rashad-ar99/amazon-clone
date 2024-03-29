import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
			<p className="order__id">
				<small>{order.id}</small>
			</p>
			{order.data.basket?.map((item) => (
				<CheckoutProduct item={item} hideButton={true} />
			))}
			<CurrencyFormat
				renderText={(value) => <h3>Order total: {value}</h3>}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType="text"
				thousandSeparator={true}
				prefix={"₹"}
			/>
		</div>
	);
}

export default Order;

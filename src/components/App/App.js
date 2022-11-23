import Header from "../Header/Header";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider/StateProvider";
import Payment from "../Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "../Orders/Orders";

const promise = loadStripe(
	"pk_test_51L1OunSHskNrs7sKihzmoRuNKsDt08oOCdIKQkcVEHmSdmhF2ynZBC80roAlFiNrJrp3TN9vvd2AnGkcxOeMcPtd00DEHSbfIT"
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("Auth user is ", authUser);

			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<div className="app">
			<Router>
				<Routes>
					<Route exact path="/" element={[<Header />, <Home />]} />
					<Route path="/checkout" element={[<Header />, <Checkout />]} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/payment"
						element={[
							<Header />,
							<Elements stripe={promise}>
								<Payment />
							</Elements>,
						]}
					/>
					<Route path="/orders" element={[<Header />, <Orders />]} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

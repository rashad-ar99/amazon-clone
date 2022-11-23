import React, { useState } from "react";
import "./Login.css";
import amazon_logo from "../../images/amazon_login_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
	const navigate = useNavigate();

	const [userInput, setUserInput] = useState({
		email: "",
		password: "",
	});

	const signIn = (event) => {
		event.preventDefault();

		signInWithEmailAndPassword(auth, userInput.email, userInput.password)
			.then((auth) => {
				// console.log(auth);
				if (auth) navigate("/");
			})
			.catch((error) => alert("User not found!"));
	};

	const register = (event) => {
		event.preventDefault();

		createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
			.then((auth) => {
				console.log(auth);
				if (auth) navigate("/");
			})
			.catch((error) => alert("User already registered!"));
	};

	return (
		<div className="login">
			<Link to="/">
				<img className="login__logo" src={amazon_logo} alt="amazon logo" />
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>

				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={userInput.email}
						onChange={(event) => {
							setUserInput({ ...userInput, email: event.target.value });
						}}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={userInput.password}
						onChange={(event) => {
							setUserInput({ ...userInput, password: event.target.value });
						}}
					/>
					<button
						className="login__signInButton"
						type="submit"
						onClick={signIn}
					>
						Sign In
					</button>
				</form>
				<p>
					By continuing, you agree to Amazon's Conditions of Use and Privacy
					Notice.
				</p>
				<button className="login__registerButton" onClick={register}>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;

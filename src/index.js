import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import reducer, { initialState } from "./components/StateProvider/Reducer";
import { StateProvider } from "./components/StateProvider/StateProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>
);

import React from "react";111
import ReactDOM from "react-dom";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./App";
import { ContextProvider } from "./context";

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

import React from "react";
import { useGlobalContext } from "../../context";
import { Wrapper } from "./Map.style";
require("dotenv").config();

export const Map = () => {
	const { state } = useGlobalContext();
	const URL = "https://www.google.com/maps/embed/v1/place?q=";
	const place = `${URL}${state.loc.replace(" ", "+")}+${state.city}&key=${
		process.env.REACT_APP_GOOGLE_KEY
	}`;

	return (
		<Wrapper>
			<iframe
				title="map"
				style={{ width: "100%", height: "100%", border: "0" }}
				loading="lazy"
				src={place}
			></iframe>
		</Wrapper>
	);
};

export default Map;

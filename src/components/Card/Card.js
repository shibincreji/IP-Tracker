import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../../pages/loading/Loading";
import { Wrapper } from "./Card.style";

const Card = () => {
	const { state, isLoading } = useGlobalContext();
	return (
		<Wrapper>
			{isLoading ? <Loading /> : null}
			<div className="details">
				<p>IP ADDRESS</p>
				<h2>{state.ip}</h2>
			</div>
			<div className="details">
				<p>LOCATION</p>
				<h2>{state.loc}</h2>
				<p> {`( ${state.city} )`}</p>
			</div>
			<div className="details">
				<p>TIMEZONE</p>
				<h2>{state.time}</h2>
			</div>
			<div className="details">
				<p>ISP</p>
				<h2>{state.isp}</h2>
			</div>
		</Wrapper>
	);
};

export default Card;

import React from "react";
import Searchbar from "../components/searchbar/Searchbar";
import { Wrapper, Header } from "./Home.style";
import Bg from "../assets/pattern-bg.png";
import Card from "../components/Card/Card";
import Modal from "../components/modal/Modal";
import { useGlobalContext } from "../context";
import Map from "../components/map/Map";

const Home = () => {
	const { modal } = useGlobalContext();
	return (
		<Wrapper>
			{modal.modalOpen ? <Modal /> : null}
			<Header bg={Bg}>
				<h1>IP Address Tracker</h1>
				<Searchbar />
				<Card />
			</Header>
			<Map />
		</Wrapper>
		
	);
};

export default Home;

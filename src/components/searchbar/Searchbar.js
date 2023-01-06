import React from "react";
import { Button, Input, Wrapper, Image } from "./Searchbar.style";
import Arrow from "../../assets/icon-arrow.svg";
import { useGlobalContext } from "../../context";

const Searchbar = () => {
	const {
		fetchIPDetails,
		searchTerm,
		setSearchTerm,
		setModal,
		errorMessages,
		modal,
	} = useGlobalContext();
	let timeout;
	return (
		<Wrapper>
			<form style={{"width":"100%","height":"100%"}} onSubmit={(e) => {
					e.preventDefault();
					if (!searchTerm) {
						clearTimeout(timeout);
						setModal({
							modalOpen: true,
							modalContent: errorMessages[0],
						});
						timeout = setTimeout(() => {
							setModal({ ...modal, modalOpen: false });
						}, 3000);
					} else {
						fetchIPDetails(searchTerm);
					}
				}}>
				<Input
				type="text"
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
				}}
			/>
			<Button type="submit">
				<Image src={Arrow} />
			</Button>
			</form>
			
		</Wrapper>
	);
};

export default Searchbar;

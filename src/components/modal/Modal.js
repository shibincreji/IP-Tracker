import React from "react";11111111111111
import { useGlobalContext } from "../../context";
import { Wrapper } from "./Modal.style";

const Modal = () => {
	const { modal } = useGlobalContext();
	return (
		<Wrapper>
			<p>{modal.modalContent}</p>
		</Wrapper>
	);
};

export default Modal;

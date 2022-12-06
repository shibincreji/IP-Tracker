import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	max-width: 550px;
	height: 55px;
	border-radius: 15px;
	overflow: hidden;
	margin: auto;
	display: flex;
	align-items: center;
`;

export const Button = styled.button`
	width: 15%;
	height: 100%;
	border: none;
	background-color: black;
	cursor: pointer;
	transition: background-color 200ms ease-in-out;

	&:hover {
		background-color: hsl(0, 0%, 17%);
	}
`;

export const Input = styled.input`
	width: 85%;
	border: none;
	height: 100%;
	padding: 30px;
	font-size: 1.2rem;
	font-family: "Rubik", sans-serif;
	font-weight: 400;

	&:focus {
		border: none;
		outline: none;
	}
`;

export const Image = styled.img`
	color: black;
`;

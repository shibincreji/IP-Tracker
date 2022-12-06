import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	min-height: 900px;
	height: 100vh;
	position: relative;
`;

export const Header = styled.div`
	padding: 30px;
	height: 45%;
	max-height: 350px;
	width: 100%;
	background: url(${(props) => props.bg});
	background-size: cover;
	text-align: center;
	color: white;
	position: relative;
	z-index: 10000;

	@media (min-width: 768px) {
		min-height: 20px;
		height: 35%;
		padding-top: 50px;
	}

	h1 {
		margin-bottom: 30px;
		font-size: 1.5rem;
		font-weight: 500;
	}
`;

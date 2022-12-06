import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	top: 150px;
	left: 50%;
	transform: translateX(-50%);
	padding: 1em 2em;
	background-color: aliceblue;
	z-index: 10001;
	border-radius: 10px;
	box-shadow: 0 10px 20px #0001;
	text-align: center;

	@media (min-width: 768px) {
		top: 180px;
	}
`;

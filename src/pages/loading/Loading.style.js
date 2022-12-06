import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	inset: 0;
	background-color: white;
`;

export const Gradient = styled.div`
	width: 100%;
	height: 100%;
	background: linear-gradient(
		90deg,
		white 0% 40%,
		#f0f0f0 53% 55%,
		white 70% 100%
	);
	animation: move 1500ms infinite;

	@keyframes move {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(100%);
		}
	}
`;

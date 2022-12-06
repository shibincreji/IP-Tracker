import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 30px;
	max-width: 1200px;
	margin: auto;
	background-color: white;
	color: black;
	border-radius: 15px;
	position: absolute;
	bottom: 0;
	transform: translateY(50%);
	left: 30px;
	right: 30px;
	min-height: 315px;
	box-shadow: 0 10px 30px #0005;
	overflow: hidden;
	word-wrap: break-word;

	.details {
		p {
			color: hsl(0, 0%, 59%);
			font-weight: 500;
			font-size: 0.7rem;
			margin-top: 20px;
		}
		&:nth-child(1) {
			p {
				margin-top: 0;
			}
		}

		&:nth-child(2) {
			p:nth-child(3) {
				margin-top: 5px;
				font-size: 1rem;
				font-weight: 400;
				color: black;
			}
		}
		h2 {
			font-weight: 500;
			margin-top: 10px;
		}
	}

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		min-height: 200px;
		text-align: left;

		.details {
			width: 25%;
			border-right: 1px solid hsl(0, 0%, 59%);
			padding: 0 30px;
			min-height: 120px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;

			&:nth-child(1) {
				p {
					margin-top: 20px;
				}
			}
		}

		.details:nth-child(4) {
			border: none;
		}
		h2 {
			font-size: 1.5rem;
		}
	}
`;

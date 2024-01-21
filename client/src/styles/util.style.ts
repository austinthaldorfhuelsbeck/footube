import { styled } from "styled-components";

export const CircleImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

export const InlineButton = styled.button`
	border-radius: 3px;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
	font-weight: 500;
	background-color: ${({ theme }) => theme.soft};
	color: ${({ theme }) => theme.textSoft};
`;
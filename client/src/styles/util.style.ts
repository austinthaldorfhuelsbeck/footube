import { styled } from "styled-components";

export const Hr = styled.hr`
	margin: 15px 0px;
	border-top: ${({ theme }) => `1px solid ${theme.soft}`};
	border-bottom: none;
`;

export const CircleImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

export const SubmitButton = styled.button`
	border-radius: 3px;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
	font-weight: 500;
	background-color: ${({ theme }) => theme.soft};
	color: ${({ theme }) => theme.textSoft};
`;
import { styled } from "styled-components";

export const Container = styled.div`
	position: sticky;
	top: 0;
	height: 56px;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	height: 100%;
	padding: 0 20px;
	position: relative;
`;

export const Search = styled.div`
	position: absolute;
	width: 40%;
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px;
	border: ${({ theme }) => `1px solid ${theme.soft}`};
	border-radius: 3px;
`;

export const Input = styled.input`
	border: none;
	background-color: transparent;
`;

export const Button = styled.button`
	padding: 5px 15px;
	background-color: transparent;
	border: 1px solid #3ea6ff;
	color: #3ea6ff;
	border-radius: 3px;
	font-weight: 500;
	text-transform: uppercase;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
`;

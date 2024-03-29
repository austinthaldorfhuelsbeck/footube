import { styled } from "styled-components";

export const Container = styled.div`
	position: sticky;
	top: 0;
	height: 56px;
	background-color: ${({ theme }) => theme.bgLighter};
	z-index: 1;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	padding: 0 20px;
	position: relative;
`;

export const Search = styled.form`
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
	color: ${({ theme }) => theme.text};
	border-radius: 3px;
	svg {
		cursor: pointer;
	}
`;

export const Input = styled.input`
	border: none;
	background-color: transparent;
	outline: none;
	width: 100%;
	color: ${({ theme }) => theme.text};
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

export const User = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
	cursor: default;
	font-size: 12px;
	svg,
	img {
		cursor: pointer;
	}
`;

export const Avatar = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background-color: #999;
`;

export const ContextMenu = styled.div`
	background-color: ${({ theme }) => `${theme.textSoft}a7`};
	position: absolute;
	top: 50px;
	padding: 10px;
	cursor: pointer;
	border-radius: 3px;
	&:hover {
		background-color: ${({ theme }) => theme.textSoft};
	}
`;
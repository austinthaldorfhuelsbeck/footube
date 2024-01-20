import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.bgLighter};
	height: 100vh;
	color: ${({ theme }) => theme.text};
	font-size: 14px;
	position: sticky;
	top: 0;
`;

export const Wrapper = styled.div`
	padding: 18px 26px;
`;

export const Header = styled.div`
	display: flex;
	gap: 25px;
	padding: 0 0 25px 5px;
`;

export const LogoLink = styled(Link)`
	display: flex;
	align-items: center;
	font-weight: bold;
	gap: 5px;
`;

export const Img = styled.img`
	height: 25px;
`;

export const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	cursor: pointer;
	padding: 7.5px 5px;
	border-radius: 5px;

	&:hover {
		background-color: ${({ theme }) => theme.soft};
	}
`;

export const Login = styled.div``;

export const Button = styled.button`
	padding: 5px 15px;
	background-color: transparent;
	border: 1px solid #3ea6ff;
	color: #3ea6ff;
	border-radius: 3px;
	font-weight: 500;
	text-transform: uppercase;
	margin-top: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
`;

export const Title = styled.h2`
	font-size: 14px;
	font-weight: 500;
	color: #aaa;
	text-transform: uppercase;
`;

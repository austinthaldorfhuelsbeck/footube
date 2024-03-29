import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 56px);
	color: ${({ theme }) => theme.text};
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bgLighter};
	border: 1px solid ${({ theme }) => theme.soft};
	padding: 20px 50px;
	gap: 10px;
`;

export const Title = styled.h1`
	font-size: 24px;
`;

export const Subtitle = styled.h2`
	font-size: 20px;
	font-weight: 300;
`;

export const Input = styled.input`
	border: 1px solid ${({ theme }) => theme.soft};
	border-radius: 3px;
	padding: 10px;
	background-color: transparent;
	width: 100%;
	color: ${({ theme }) => theme.text};
`;

export const More = styled.div`
	display: flex;
	margin-top: 10px;
	font-size: 12px;
	color: ${({ theme }) => theme.textSoft};
	cursor: default;
`;

export const FooterLinks = styled.div`
	margin-left: 50px;
`;

export const FooterLink = styled(Link)`
	margin-left: 30px;
	cursor: pointer;
`;

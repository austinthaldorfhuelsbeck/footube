import styled from "styled-components";
import { Link } from "react-router-dom";

interface TypeProps {
	type: string;
}
export const Container = styled(Link)<TypeProps>`
	width: 360px;
	margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
	cursor: pointer;
	display: ${(props) => props.type === "sm" && "flex"};
	gap: 10px;
`;

export const Image = styled.img<TypeProps>`
	width: ${(props) => props.type !== "sm" && "360px"};
	height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
	background-color: #999;
	border: none;
	flex: 1;
	border-radius: 5px;
`;

export const Details = styled.div<TypeProps>`
	display: flex;
	margin-top: ${(props) => props.type !== "sm" && "16px"};
	gap: 12px;
	flex: 1;
`;

export const ChannelImage = styled.img<TypeProps>`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: #999;
	display: ${(props) => props.type === "sm" && "none"};
`;

export const Title = styled.h1`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
`;

export const ChannelName = styled.h2`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
	margin: 9px 0;
`;

export const Info = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
`;

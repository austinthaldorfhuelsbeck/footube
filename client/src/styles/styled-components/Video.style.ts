import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 24px;
`;

export const VideoFrame = styled.video`
	max-height: 720px;
	width: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	flex: 5;
`;

export const Title = styled.h1`
	font-size: 18px;
	font-weight: 400;
	margin: 20px 0 10px 0;
	color: ${({ theme }) => theme.text};
`;

export const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Info = styled.span`
	color: ${({ theme }) => theme.textSoft};
`;

export const Buttons = styled.div`
	display: flex;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	cursor: pointer;
	gap: 5px;
	background-color: none;
	background: none;
	border: none;
	color: ${({ theme }) => theme.text};
`;

export const Channel = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ChannelInfo = styled.div`
	display: flex;
	gap: 20px;
`;

export const ChannelDetail = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.text};
`;

export const ChannelName = styled.span`
	font-weight: 500;
`;

export const Counter = styled.span`
	margin: 5px 0 20px 0;
	color: ${({ theme }) => theme.textSoft};
	font-size: 12px;
`;

export const Description = styled.p`
	font-size: 14px;
`;

export const Subscribe = styled.button`
	background-color: #cc1a00;
	font-weight: 500;
	color: white;
	border: none;
	border-radius: 3px;
	height: max-content;
	text-transform: uppercase;
	padding: 10px 20px;
	cursor: pointer;
`;

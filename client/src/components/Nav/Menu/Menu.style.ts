import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.bgLighter};
	min-height: 100vh;
	color: ${({ theme }) => theme.text};
	font-size: 14px;
	position: sticky;
	top: 0px;
	z-index: 1;
	padding: 16px 32px 18px 20px;
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Wrapper = styled.div`
	padding-top: 24px;
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

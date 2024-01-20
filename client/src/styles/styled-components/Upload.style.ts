import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #000000a7;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div`
	width: 600px;
	height: 600px;
	background-color: ${({ theme }) => theme.bgLighter};
	color: ${({ theme }) => theme.text};
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: relative;
`;

export const CreateButton = styled.div`
	position: absolute;
	cursor: pointer;
	top: 10px;
	right: 10px;
`;

export const Title = styled.h1`
	text-align: center;
`;

export const Input = styled.input`
	border: 1px solid ${({ theme }) => theme.soft};
	color: ${({ theme }) => theme.text};
	border-radius: 3px;
	padding: 10px;
	background-color: transparent;
`;

export const TextArea = styled.textarea`
	border: 1px solid ${({ theme }) => theme.soft};
	color: ${({ theme }) => theme.text};
	border-radius: 3px;
	padding: 10px;
	background-color: transparent;
`;

export const Label = styled.label`
	font-size: 14px;
`;

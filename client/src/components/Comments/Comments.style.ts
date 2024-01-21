import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 10px;
	margin: 30px 0;
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	color: ${({ theme }) => theme.text};
`;

export const Name = styled.span`
	font-size: 13px;
	font-weight: 500;
`;
export const Date = styled.span`
	font-size: 12px;
	font-weight: 400;
	color: ${({ theme }) => theme.textSoft};
	margin-left: 5px;
`;
export const Text = styled.span`
	font-size: 13px;
`;

export const NewComment = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	padding-bottom: 10px;
`;

export const Form = styled.form`
	width: 100%;
`;

export const TextArea = styled.textarea`
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.soft};
	color: ${({ theme }) => theme.text};
	background-color: transparent;
	outline: none;
	padding: 5px;
	width: 100%;
`;

export const Button = styled.button`
	cursor: pointer;
	background-color: ${({ theme }) => theme.soft};
	color: ${({ theme }) => theme.text};
	border: none;
	border-radius: 3px;
	padding: 5px 10px;
	font-weight: 500;
	margin: 5px;
`;
import styled from "styled-components";

export const Container = styled.div`
	background-color: #cc1a0050;
	margin: 10px 0;
	padding: 5px 10px;
	border-radius: 5px;
	color: ${({ theme }) => theme.text};
`;

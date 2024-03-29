import styled from "styled-components";

export const Container = styled.div`
	display: flex;
`;

export const Main = styled.div`
	flex: 6;
	background-color: ${({ theme }) => theme.bg};
`;

export const Wrapper = styled.div`
	min-height: 100vh;
	padding: 22px 96px;
`;

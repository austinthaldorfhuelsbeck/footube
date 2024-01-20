import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 25px;
	color: ${({ theme }) => theme.text};
	font-size: 14px;
	svg {
		cursor: pointer;
	}
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

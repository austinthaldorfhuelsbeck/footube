import { MenuOutlined } from "@mui/icons-material";
import {
	Container,
	Img,
	LogoLink,
} from "../styles/styled-components/MenuHeader";

import YouTubeLogo from "../img/logo.png";
import { SyntheticEvent } from "react";

interface HeaderProps {
	toggle: (e: SyntheticEvent<HTMLOrSVGElement>) => void;
}

export const MenuHeader: React.FC<HeaderProps> = ({ toggle }) => {
	return (
		<Container>
			<MenuOutlined onClick={toggle} />
			<LogoLink to="/">
				<Img src={YouTubeLogo} />
				FooTube
			</LogoLink>
		</Container>
	);
};

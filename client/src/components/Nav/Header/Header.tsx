import { MenuOutlined } from "@mui/icons-material";
import { Container, Img, LogoLink } from "./Header.style";

import YouTubeLogo from "../../../img/logo.png";
import { SyntheticEvent } from "react";

interface HeaderProps {
	toggle: (e: SyntheticEvent<HTMLOrSVGElement>) => void;
}

// accepts a function for toggling show/hide menu on hamburger svg click
export const Header: React.FC<HeaderProps> = ({ toggle }) => {
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

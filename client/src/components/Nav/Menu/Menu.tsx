import React, { SyntheticEvent } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { MenuItem } from "./MenuItem";
import { menuItems } from "./menu-items";
import { Header } from "../Header/Header";
import { NavbarProps } from "../Navbar/Navbar";
import { RootState } from "../../../reducers/store";
import { Button, Container, Item, Title, Wrapper } from "./Menu.style";

export interface MenuProps extends NavbarProps {
	isDarkMode: boolean;
	toggleTheme: (e: SyntheticEvent<HTMLDivElement>) => void;
}

export const Menu: React.FC<MenuProps> = ({
	isDarkMode,
	toggleTheme,
	toggleMenu,
}) => {
	// get user with redux
	const { currentUser } = useSelector((state: RootState) => state.user);

	// break apart the menu-items object with slice
	return (
		<Container>
			<Header toggle={toggleMenu} />
			<Wrapper>
				{menuItems.slice(0, 5).map((item) => (
					<MenuItem {...item} />
				))}
				<hr />
				{!currentUser && (
					<>
						<Title>
							Sign in to like videos, comment, and subscribe.
							<Link to="/sign-in">
								<Button>
									<FontAwesomeIcon icon={faUserPlus} />
									Sign in
								</Button>
							</Link>
						</Title>
						<hr />
					</>
				)}
				<Title>Best of FooTube</Title>
				{menuItems.slice(5, 11).map((item) => (
					<MenuItem {...item} />
				))}
				<hr />
				{menuItems.slice(11).map((item) => (
					<MenuItem {...item} />
				))}
				<Item onClick={toggleTheme}>
					<FontAwesomeIcon icon={faHome} />
					{isDarkMode ? "Light mode" : "Dark mode"}
				</Item>
			</Wrapper>
		</Container>
	);
};

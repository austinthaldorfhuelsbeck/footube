import React from "react";

import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useApp } from "./hooks/useApp";
import { Home } from "./views/Home/Home";
import { Video } from "./views/Video/Video";
import { Search } from "./views/Search/Search";
import { Signin } from "./components/Signin/Signin";
import { darkTheme, lightTheme } from "./styles/theme";
import { Container, Main, Wrapper } from "./App.style";
import { Menu, MenuProps } from "./components/Nav/Menu/Menu";
import { Navbar, NavbarProps } from "./components/Nav/Navbar/Navbar";

export const App: React.FC = () => {
	// custom hook for managing state required by menu, navbar
	const { isDarkMode, isMenu, toggleTheme, toggleMenu } = useApp();

	// menu can hide itself; change dark mode
	const menuProps: MenuProps = {
		isDarkMode,
		isMenu,
		toggleTheme,
		toggleMenu,
	};
	// navbar can hide menu
	const navbarProps: NavbarProps = {
		isMenu,
		toggleMenu,
	};

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<Container>
				{isMenu && <Menu {...menuProps} />}
				<Main>
					<Navbar {...navbarProps} />
					<Wrapper>
						<Routes>
							<Route path="/">
								<Route index element={<Home type="random" />} />
								<Route path="trending" element={<Home type="trend" />} />
								<Route path="subscriptions" element={<Home type="sub" />} />
								<Route path="search" element={<Search />} />
								<Route path="sign-in" element={<Signin />} />
								<Route path="video">
									<Route path=":id" element={<Video />} />
								</Route>
								<Route path="explore">
									<Route path=":tags" element={<Home />} />
								</Route>
							</Route>
						</Routes>
					</Wrapper>
				</Main>
			</Container>
		</ThemeProvider>
	);
};

import { Dispatch, SetStateAction, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./views/Home";
import { Video } from "./views/Video";
import { Search } from "./views/Search";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { SignIn } from "./components/SignIn";
import { darkTheme, lightTheme } from "./styles/theme";
import { Container, Main, Wrapper } from "./styles/styled-components/App.style";

export interface NavbarProps {
	isMenu: boolean;
	setIsMenu: Dispatch<SetStateAction<boolean>>;
}
export interface MenuProps extends NavbarProps {
	isDarkMode: boolean;
	setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export function App(): JSX.Element {
	// show/hide state
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [isMenu, setIsMenu] = useState(true);

	// build props
	const menuProps: MenuProps = {
		isDarkMode,
		setIsDarkMode,
		isMenu,
		setIsMenu,
	};
	const navbarProps: NavbarProps = {
		isMenu,
		setIsMenu,
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
								<Route path="signin" element={<SignIn />} />
								<Route path="video">
									<Route path=":id" element={<Video />} />
								</Route>
							</Route>
						</Routes>
					</Wrapper>
				</Main>
			</Container>
		</ThemeProvider>
	);
}

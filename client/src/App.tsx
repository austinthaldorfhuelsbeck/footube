import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { Video } from "./pages/Video";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./styles/theme";
import { Container, Main, Wrapper } from "./styles/App.style";

export function App(): JSX.Element {
	const [darkMode, setDarkMode] = useState<boolean>(true);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container>
				<Menu darkMode={darkMode} setDarkMode={setDarkMode} />
				<Main>
					<Navbar />
					<Wrapper>
						<Routes>
							<Route path="/">
								<Route index element={<Home />} />
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

import { useState } from "react";

import { ThemeProvider } from "styled-components";

import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./styles/theme";
import { Container, Main, Wrapper } from "./styles/App.style";

export function App() {
	const [darkMode, setDarkMode] = useState<boolean>(true);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container>
				<Menu darkMode={darkMode} setDarkMode={setDarkMode} />
				<Main>
					<Navbar />
					<Wrapper>
						<h1>test</h1>
					</Wrapper>
				</Main>
			</Container>
		</ThemeProvider>
	);
}

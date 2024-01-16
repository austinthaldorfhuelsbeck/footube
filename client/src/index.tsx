import { StrictMode } from "react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";

import { App } from "./App";
import { store } from "./redux/store";
import { GlobalStyles } from "./styles/global-styles.style";

// Get root element
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

// Render
root.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyles />
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>,
);

import { StrictMode } from "react";

import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";

import { App } from "./App";
import { GlobalStyles } from "./styles/global-styles.style";

// Get root element
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

// Render
root.render(
	<StrictMode>
		<BrowserRouter>
			<GlobalStyles />
			<App />
		</BrowserRouter>
	</StrictMode>,
);

import { StrictMode } from "react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";

import { App } from "./App";
import { persistor, store } from "./reducers/store";
import { GlobalStyles } from "./styles/global-styles.style";
import { PersistGate } from "redux-persist/integration/react";

// Get root element
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

// Render
root.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyles />
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</StrictMode>,
);

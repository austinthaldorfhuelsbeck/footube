import { SyntheticEvent, useState } from "react";

// for managing global state; toggle dark mode, menu
type UseApp = {
	isDarkMode: boolean;
	isMenu: boolean;
	toggleTheme: (e: SyntheticEvent<HTMLDivElement>) => void;
	toggleMenu: (e: SyntheticEvent<HTMLOrSVGElement>) => void;
};
export const useApp = (): UseApp => {
	// dark mode; menu show/hide state
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [isMenu, setIsMenu] = useState(true);
	// click handlers
	const toggleTheme = (e: SyntheticEvent<HTMLDivElement>) =>
		setIsDarkMode(!isDarkMode);
	const toggleMenu = (e: SyntheticEvent<HTMLOrSVGElement>) =>
		setIsMenu(!isMenu);

	return { isDarkMode, isMenu, toggleTheme, toggleMenu };
};

import { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { logout } from "../../../reducers/userSlice";

type UseNavbar = {
	isUploadOpen: boolean;
	isLogoutOpen: boolean;
	onSearch: (
		e: FormEvent<HTMLFormElement> | SyntheticEvent<SVGSVGElement>,
	) => void;
	onLogout: (e: SyntheticEvent<HTMLDivElement>) => void;
	onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
	toggleUpload: (e: SyntheticEvent<HTMLOrSVGElement>) => void;
	toggleLogout: (e: SyntheticEvent<any>) => void;
};
export const useNavbar = (): UseNavbar => {
	// react router
	const navigate: NavigateFunction = useNavigate();
	// redux dispatch
	const dispatch: Dispatch = useDispatch();

	// state for show/hide logout context menu
	const [isUploadOpen, setIsUploadOpen] = useState<boolean>(false);
	// state for show/hide video upload modal dialog
	const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);
	// state for searching
	const [q, setQ] = useState<string>("");

	// handlers
	const onSearch = (
		e: FormEvent<HTMLFormElement> | SyntheticEvent<SVGSVGElement>,
	): void => {
		e.preventDefault();
		navigate(`/search?q=${q}`);
	};
	const onLogout = (e: SyntheticEvent<HTMLDivElement>): void => {
		e.preventDefault();
		dispatch(logout());
	};
	const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setQ(e.target.value);
	};
	const toggleUpload = (e: SyntheticEvent<HTMLOrSVGElement>): void => {
		setIsUploadOpen(!isUploadOpen);
	};
	const toggleLogout = (
		e: SyntheticEvent<HTMLImageElement | HTMLDivElement>,
	): void => {
		setIsLogoutOpen(!isLogoutOpen);
	};

	return {
		isUploadOpen,
		isLogoutOpen,
		onSearch,
		onLogout,
		onSearchChange,
		toggleUpload,
		toggleLogout,
	};
};

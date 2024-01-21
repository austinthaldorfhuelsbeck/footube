import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
	loginFailure,
	loginStart,
	loginSuccess,
} from "../../reducers/userSlice";
import { UserCredential, signInWithPopup } from "firebase/auth";
import { IApiResponse } from "../../interfaces/interfaces";
import { login } from "../../middleware/api";
import { auth, provider } from "../../firebase";

interface IFormData {
	name: string;
	email: string;
	password: string;
}
type UseSignin = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onLogin: (e: SyntheticEvent<HTMLButtonElement>) => void;
	onLoginGoogle: (e: SyntheticEvent<HTMLButtonElement>) => void;
};
export const useSignin = (): UseSignin => {
	// state for form data
	const [formData, setFormData] = useState<IFormData>({
		name: "",
		email: "",
		password: "",
	});
	// redux dispatch
	const dispatch: Dispatch = useDispatch();

	// handlers
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const onLogin = async (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(loginStart());
		const load = async () => {
			const res: IApiResponse = await login(formData);
			if (res.data) dispatch(loginSuccess(res.data));
			if (res.error) dispatch(loginFailure());
		};
		load();
	};
	const onLoginGoogle = async (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(loginStart());
		const load = async () => {
			const userRes: UserCredential = await signInWithPopup(auth, provider);
			const res: IApiResponse = await login(userRes);
			if (res.data) dispatch(loginSuccess(res.data));
			if (res.error) dispatch(loginFailure());
		};
		load();
	};

	return { onChange, onLogin, onLoginGoogle };
};

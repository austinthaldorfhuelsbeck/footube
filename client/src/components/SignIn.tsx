import { ChangeEvent, SyntheticEvent, useState } from "react";

import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import axios, { AxiosResponse } from "axios";

import { auth, provider } from "../firebase";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import {
	Button,
	Container,
	Input,
	Link,
	Links,
	More,
	Subtitle,
	Title,
	Wrapper,
} from "../styles/styled-components/SignIn.style";
import { UserCredential, signInWithPopup } from "firebase/auth";

interface ISignIn {
	name: string;
	email: string;
	password: string;
}

export function SignIn(): JSX.Element {
	const initialFormData: ISignIn = {
		name: "",
		email: "",
		password: "",
	};
	const [formData, setFormData] = useState<ISignIn>(initialFormData);
	const dispatch: Dispatch = useDispatch();

	function onChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}
	async function onLogin(e: SyntheticEvent<HTMLButtonElement>) {
		e.preventDefault();
		dispatch(loginStart());
		try {
			const res: AxiosResponse = await axios.post(
				`/api/auth/signin`,
				formData,
				{ withCredentials: true },
			);
			if (res.data) dispatch(loginSuccess(res.data));
		} catch (err) {
			dispatch(loginFailure());
		}
	}
	async function signInWithGoogle(e: SyntheticEvent<HTMLButtonElement>) {
		e.preventDefault();
		dispatch(loginStart());
		try {
			const userRes: UserCredential = await signInWithPopup(auth, provider);
			const res: AxiosResponse = await axios.post(
				`/api/auth/google`,
				{
					name: userRes.user.displayName,
					email: userRes.user.email,
					img: userRes.user.photoURL,
				},
				{ withCredentials: true },
			);
			if (res.data) dispatch(loginSuccess(res.data));
		} catch (err) {
			dispatch(loginFailure());
		}
	}

	return (
		<Container>
			<Wrapper>
				<Title>Sign in</Title>
				<Subtitle>to continue to FooTube</Subtitle>
				<Input name="name" placeholder="username" onChange={onChange} />
				<Input
					name="password"
					type="password"
					placeholder="password"
					onChange={onChange}
				/>
				<Button onClick={onLogin}>Sign in</Button>
				<Title>or</Title>
				<Button onClick={signInWithGoogle}>Sign in with Google</Button>
				<Title>or</Title>
				<Input name="name" placeholder="username" onChange={onChange} />
				<Input
					name="email"
					type="email"
					placeholder="email"
					onChange={onChange}
				/>
				<Input
					name="password"
					type="password"
					placeholder="password"
					onChange={onChange}
				/>
				<Button>Sign up</Button>
			</Wrapper>
			<More>
				English(USA)
				<Links>
					<Link>Help</Link>
					<Link>Privacy</Link>
					<Link>Terms</Link>
				</Links>
			</More>
		</Container>
	);
}

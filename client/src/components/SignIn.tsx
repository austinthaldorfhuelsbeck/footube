import { ChangeEvent, SyntheticEvent, useState } from "react";

import axios, { AxiosResponse } from "axios";

import { apiUrl } from "../utils/apiUrl";
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
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

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
				`${apiUrl}/auth/signin`,
				formData,
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

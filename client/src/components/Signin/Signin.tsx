import React from "react";

import { InlineButton } from "../../styles/util.style";
import {
	Container,
	Input,
	FooterLink,
	FooterLinks,
	More,
	Subtitle,
	Title,
	Wrapper,
} from "./Signin.style";
import { useSignin } from "./useSignin";

export const Signin: React.FC = () => {
	// get form handlers from custom hook
	const { onChange, onLogin, onLoginGoogle } = useSignin();

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
				<InlineButton onClick={onLogin}>Sign in</InlineButton>
				<Title>or</Title>
				<InlineButton onClick={onLoginGoogle}>Sign in with Google</InlineButton>
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
				<InlineButton>Sign up</InlineButton>
			</Wrapper>
			<More>
				English(USA)
				<FooterLinks>
					<FooterLink to="/help">Help</FooterLink>
					<FooterLink to="/privacy">Privacy</FooterLink>
					<FooterLink to="/terms">Terms</FooterLink>
				</FooterLinks>
			</More>
		</Container>
	);
};

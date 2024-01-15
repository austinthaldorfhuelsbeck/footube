import {
	Button,
	Container,
	Input,
	More,
	Subtitle,
	Title,
	Wrapper,
	Links,
	Link,
} from "../styles/styled-components/SignIn.style";

export function SignIn(): JSX.Element {
	return (
		<Container>
			<Wrapper>
				<Title>Sign in</Title>
				<Subtitle>to continue to FooTube</Subtitle>
				<Input placeholder="username" />
				<Input type="password" placeholder="password" />
				<Button>Sign in</Button>
				<Title>or</Title>
				<Input placeholder="username" />
				<Input type="email" placeholder="email" />
				<Input type="password" placeholder="password" />
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

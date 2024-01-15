import {
	Container,
	Date,
	Details,
	Name,
	Text,
} from "../styles/styled-components/Comment.style";
import { CircleImg } from "../styles/util.style";

export function Comment(): JSX.Element {
	return (
		<Container>
			<CircleImg src="https://austinthaldorfhuelsbeck.github.io/ath-portf/img/ath.jpeg" />
			<Details>
				<Name>John Doe</Name>
				<Date>1 day ago</Date>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum
					nostrum exercitationem, minus nesciunt repudiandae saepe sint earum ut
					reprehenderit animi, porro doloremque iste quaerat autem rem et
					consequatur! Atque.
				</Text>
			</Details>
		</Container>
	);
}

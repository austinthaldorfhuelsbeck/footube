import { PropsWithChildren, useEffect, useState } from "react";

import axios, { AxiosResponse } from "axios";

import { Card } from "../components/Card";
import { Container } from "../styles/styled-components/Home.style";
import { IVideo } from "../interfaces/models";

interface ComponentProps {
	type: string;
}

export function Home({ type }: PropsWithChildren<ComponentProps>): JSX.Element {
	const [videos, setVideos] = useState<(IVideo | undefined)[]>([]);

	useEffect(() => {
		async function fetchVideos() {
			const apiUrl: string = process.env.REACT_APP_API_BASE_URL || "";
			// TODO error handling
			const res: AxiosResponse = await axios.get(`${apiUrl}/videos/${type}`);
			if (res.data) setVideos(res.data);
		}
		fetchVideos();
	}, [type]);

	return (
		<Container>
			{videos.map(
				(video: IVideo | undefined) =>
					video && <Card key={video._id} video={video} />,
			)}
		</Container>
	);
}

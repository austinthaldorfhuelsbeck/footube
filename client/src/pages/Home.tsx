import { PropsWithChildren, useEffect, useState } from "react";

import axios, { AxiosResponse } from "axios";

import { Card } from "../components/Card";
import { IVideo } from "../interfaces/models";
import { Container } from "../styles/styled-components/Home.style";

interface ComponentProps {
	type: string;
}

export function Home({ type }: PropsWithChildren<ComponentProps>): JSX.Element {
	const [videos, setVideos] = useState<(IVideo | undefined)[]>([]);

	useEffect(() => {
		async function fetchVideos() {
			// TODO error handling
			const res: AxiosResponse = await axios.get(`/api/videos/${type}`, {
				withCredentials: true,
			});
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

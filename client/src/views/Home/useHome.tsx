import { useEffect, useState } from "react";

import { IVideo } from "../../interfaces/models";
import { fetchVideos } from "../../middleware/api";
import { IApiResponse, IAppError } from "../../interfaces/interfaces";
import { useParams } from "react-router-dom";

export const useHome = (type?: string) => {
	// get tags from url
	const { tags } = useParams();
	// state to store a list of videos
	const [videos, setVideos] = useState<(IVideo | undefined)[]>([]);
	// state for api errors
	const [err, setErr] = useState<IAppError | undefined>();

	// fetch depending on type or tags
	useEffect(() => {
		const load = async () => {
			const res: IApiResponse = await fetchVideos(type, tags?.split(","));
			if (res.data) setVideos(res.data);
			if (res.error) setErr(res.error);
		};
		load();
	}, [type, tags]);

	return { videos, err };
};

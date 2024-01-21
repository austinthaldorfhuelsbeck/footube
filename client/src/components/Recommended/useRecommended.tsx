import { useEffect, useState } from "react";

import { IVideo } from "../../interfaces/models";
import { fetchVideos } from "../../middleware/api";
import { IApiResponse, IAppError } from "../../interfaces/interfaces";

// for loading recommended videos on a video view page
// input: tags of the current video
// returns: array containing possible recommended videos; api error
type UseRecommended = {
	videos: (IVideo | undefined)[];
	err?: IAppError;
};
export const useRecommended = (
	tags: (string | undefined)[],
): UseRecommended => {
	// state for loading the videos
	const [videos, setVideos] = useState<(IVideo | undefined)[]>([]);
	// state for api errors
	const [err, setErr] = useState<IAppError | undefined>();

	// load videos matching tags
	useEffect(() => {
		async function load() {
			const res: IApiResponse = await fetchVideos(undefined, tags);
			if (res.data) setVideos(res.data);
			if (res.error) setErr(res.error);
		}
		load();
	}, [tags]);

	return { videos, err };
};

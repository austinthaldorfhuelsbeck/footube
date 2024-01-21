import { useEffect, useState } from "react";

import { IUser } from "../interfaces/models";
import { fetchUser } from "../middleware/api";
import { IApiResponse, IAppError } from "../interfaces/interfaces";

// for loading a channel
// input: id of the channel to load
// returns: user if found; else undefined
type UseChannel = {
	channel?: IUser;
	err?: IAppError;
};
export const useChannel = (userId: string): UseChannel => {
	const [channel, setChannel] = useState<IUser | undefined>();
	const [err, setErr] = useState<IAppError | undefined>();
	useEffect(() => {
		const load = async () => {
			const res: IApiResponse = await fetchUser(userId);
			if (res.data) setChannel(res.data);
			if (res.error) setErr(res.error);
		};
		load();
	}, [userId]);

	return { channel, err };
};

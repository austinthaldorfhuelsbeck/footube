import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
	isAxiosError,
	RawAxiosRequestHeaders,
} from "axios";

import { IApiResponse, IAppError } from "../interfaces/interfaces";
export const callExternalApi = async (
	config: AxiosRequestConfig,
): Promise<IApiResponse> => {
	const headers: RawAxiosRequestHeaders = {
		"content-type": "application/json",
	};
	try {
		const response: AxiosResponse = await axios({ ...config, headers });
		const { data } = response;

		return {
			data,
			error: null,
		};
	} catch (error) {
		if (isAxiosError(error)) {
			const axiosError = error as AxiosError;

			const { response } = axiosError;

			let message = "http request failed";

			if (response && response.statusText) {
				message = response.statusText;
			}

			if (axiosError.message) {
				message = axiosError.message;
			}

			if (response && response.data && (response.data as IAppError).message) {
				message = (response.data as IAppError).message;
			}

			return {
				data: null,
				error: {
					message,
				},
			};
		}

		return {
			data: null,
			error: {
				message: (error as Error).message,
			},
		};
	}
};

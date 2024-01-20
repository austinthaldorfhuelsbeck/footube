import { AxiosRequestConfig } from "axios";

import { callExternalApi } from "./external-api";
import { IApiResponse } from "../interfaces/interfaces";
import { IComment } from "../interfaces/models";

export const fetchUser = async (id: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `/api/users/${id}`,
		method: "GET",
	};

	return (await callExternalApi(config)) as IApiResponse;
};

export const fetchComments = async (id: string): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `/api/comments/${id}`,
		method: "GET",
	};

	return (await callExternalApi(config)) as IApiResponse;
};

export const postComment = async (
	comment: Partial<IComment>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: "/api/comments",
		method: "POST",
		data: comment,
	};

	return (await callExternalApi(config)) as IApiResponse;
};

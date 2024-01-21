import { AxiosRequestConfig } from "axios";

import { callExternalApi } from "./external-api";
import { IApiResponse } from "../interfaces/interfaces";
import { IComment, IUser, IVideo } from "../interfaces/models";
import { UserCredential } from "firebase/auth";

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

export const fetchVideos = async (
	type?: string,
	tags?: (string | undefined)[],
	query?: string,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		method: "GET",
	};
	// can fetch by type, tags, or query
	if (type) config.url = `/api/videos/${type}`;
	if (tags) config.url = `/api/videos/tags?tags=${tags}`;
	if (query) config.url = `/api/videos/search${query}`;
	return (await callExternalApi(config)) as IApiResponse;
};

export const login = async (
	cred: Partial<IUser> | UserCredential,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		method: "POST",
	};
	const userCred = cred as UserCredential;
	if (userCred.user) {
		config.url = "/api/auth/google";
		config.data = {
			name: userCred.user.displayName,
			email: userCred.user.email,
			img: userCred.user.photoURL,
		};
	} else {
		config.url = "/api/auth/signin";
		config.data = cred;
	}
	return (await callExternalApi(config)) as IApiResponse;
};

export const postVideo = async (
	video: Partial<IVideo>,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: "/api/videos",
		method: "POST",
		data: video,
	};
	return (await callExternalApi(config)) as IApiResponse;
};
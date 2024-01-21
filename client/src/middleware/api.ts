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
	tags: (string | undefined)[],
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: `/api/videos/tags?tags=${tags}`,
		method: "GET",
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const login = async (cred: Partial<IUser>): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: "/api/auth/signin",
		method: "POST",
		data: cred,
	};
	return (await callExternalApi(config)) as IApiResponse;
};

export const loginGoogle = async (
	cred: UserCredential,
): Promise<IApiResponse> => {
	const config: AxiosRequestConfig = {
		url: "/api/auth/google",
		method: "POST",
		data: {
			name: cred.user.displayName,
			email: cred.user.email,
			img: cred.user.photoURL,
		},
	};
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
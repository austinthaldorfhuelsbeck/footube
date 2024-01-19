import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVideo } from "../interfaces/models";

// Define a type for the slice state
export interface VideoState {
	currentVideo: IVideo | null;
	loading: boolean;
	error: boolean;
}

// Define the initial state using that type
const initialState: VideoState = {
	currentVideo: null,
	loading: false,
	error: false,
};

export const videoSlice = createSlice({
	name: "video",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		fetchStart: (state) => {
			state.loading = true;
		},
		fetchSuccess: (state, action: PayloadAction<IVideo>) => {
			state.loading = false;
			state.currentVideo = action.payload;
		},
		fetchFailure: (state) => {
			state.loading = false;
			state.error = true;
		},
		like: (state, action) => {
			if (!state.currentVideo?.likes.includes(action.payload)) {
				state.currentVideo?.likes.push(action.payload);
				state.currentVideo?.dislikes.splice(
					state.currentVideo.dislikes.findIndex(
						(userId) => userId === action.payload,
					),
					1,
				);
			}
		},
		dislike: (state, action) => {
			if (!state.currentVideo?.dislikes.includes(action.payload)) {
				state.currentVideo?.dislikes.push(action.payload);
				state.currentVideo?.likes.splice(
					state.currentVideo.likes.findIndex(
						(userId) => userId === action.payload,
					),
					1,
				);
			}
		},
	},
});

export const { fetchStart, fetchSuccess, fetchFailure, like, dislike } =
	videoSlice.actions;

export default videoSlice.reducer;

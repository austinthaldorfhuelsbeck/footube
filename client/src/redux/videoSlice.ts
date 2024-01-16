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
		loginStart: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, action: PayloadAction<IVideo>) => {
			state.loading = false;
			state.currentVideo = action.payload;
		},
		loginFailure: (state) => {
			state.loading = false;
			state.error = true;
		},
		logout: (state) => {
			state = initialState;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout } =
	videoSlice.actions;

export default videoSlice.reducer;

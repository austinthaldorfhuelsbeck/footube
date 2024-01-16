import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/models";

// Define a type for the slice state
export interface UserState {
	currentUser: IUser | null;
	loading: boolean;
	error: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
	currentUser: null,
	loading: false,
	error: false,
};

export const userSlice = createSlice({
	name: "user",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		loginStart: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, action: PayloadAction<IUser>) => {
			state.loading = false;
			state.currentUser = action.payload;
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
	userSlice.actions;

export default userSlice.reducer;

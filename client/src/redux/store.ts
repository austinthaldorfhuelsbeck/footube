import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import videoReducer from "./videoSlice";
// ...

export const store = configureStore({
	reducer: {
		user: userReducer,
		video: videoReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {users: UserState}
export type AppDispatch = typeof store.dispatch;

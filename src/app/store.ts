import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { githubUsersReducer } from "../store/reducers/githubUsersReducer";

export const store = configureStore({
    reducer: {
        github: githubUsersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

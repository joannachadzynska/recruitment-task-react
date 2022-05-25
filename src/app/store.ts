import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { githubUsersApi } from "./../store/github";

export const store = configureStore({
    reducer: {
        githubUsersApi: githubUsersApi.reducer,
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

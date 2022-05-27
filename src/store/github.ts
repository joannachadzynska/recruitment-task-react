import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { config } from "../config/config";
import { Commit } from "../models/commit.model";
import { Repository } from "../models/repo.model";
import { User, UserSearchResponse } from "../models/user.model";

export const githubUsersApi = createApi({
    reducerPath: "githubUsersApi",
    baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
    endpoints: (builder) => ({
        getUserByLoginName: builder.query<User, string>({
            query: (login) => `users/${login}`,
        }),
        getUserRepos: builder.query<Repository[], string>({
            query: (login) => `users/${login}/repos?sort=updated&order=desc`,
        }),
        getCommits: builder.query<Commit[], { login: string; repo: string }>({
            query: ({ login, repo }) => `repos/${login}/${repo}/commits`,
        }),
        searchUsers: builder.query<UserSearchResponse, string>({
            query: (params) => `/search/users?${params}`,
        }),
    }),
});

export const {
    useGetUserByLoginNameQuery,
    useGetUserReposQuery,
    useGetCommitsQuery,
    useSearchUsersQuery,
} = githubUsersApi;

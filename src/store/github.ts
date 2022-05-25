import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { config } from "../config/config";
import { Commit } from "../models/commit.model";
import { Repository } from "../models/repo.model";
import { User } from "../models/user.model";

export const githubUsersApi = createApi({
    reducerPath: "githubUsersApi",
    baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
    endpoints: (builder) => ({
        getUserByLoginName: builder.query<User, string>({
            query: (name) => `users/${name}`,
        }),
        getUserRepos: builder.query<Repository[], string>({
            query: (name) => `users/${name}/repos?sort=updated&order=desc`,
        }),
        getCommits: builder.query<Commit[], { name: string; repo: string }>({
            query: ({ name, repo }) => `repos/${name}/${repo}/commits`,
        }),
    }),
});

export const {
    useGetUserByLoginNameQuery,
    useGetUserReposQuery,
    useGetCommitsQuery,
} = githubUsersApi;

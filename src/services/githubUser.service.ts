import axios, { AxiosInstance } from "axios";
import { config } from "../config/config";
import { Commit } from "../models/commit.model";
import { Repository } from "../models/repo.model";
import { UserDetails, UserSearchResponse } from "../models/user.model";

export class GithubUserService {
    private readonly request: AxiosInstance;

    public constructor() {
        this.request = axios.create({
            baseURL: config.baseUrl,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
            },
            withCredentials: false,
            validateStatus: () => true,
        });
    }

    public async searchUsers(
        query: string,
        page: number = 1
    ): Promise<UserSearchResponse[] | []> {
        try {
            const response = (
                await this.request.get(
                    `${config.baseUrl}/search/users?q=${query}+in:login&page=${page}`
                )
            ).data;
            return response;
        } catch (error) {
            return [];
        }
    }

    public async getUserByLoginName(
        login: string
    ): Promise<UserDetails | null> {
        try {
            const response = (await this.request.get(`/users/${login}`)).data;
            return response;
        } catch (error) {
            return null;
        }
    }

    public async getUserRepos(login: string): Promise<Repository[] | []> {
        try {
            const response = (
                await this.request.get(
                    `/users/${login}/repos?sort=updated&order=desc&per_page=5`
                )
            ).data;
            return response;
        } catch (error) {
            return [];
        }
    }

    public async getCommits(
        login: string,
        repo: string
    ): Promise<Commit[] | []> {
        try {
            const response = (
                await this.request.get(`/repos/${login}/${repo}/commits`)
            ).data;
            return response;
        } catch (error) {
            return [];
        }
    }
}

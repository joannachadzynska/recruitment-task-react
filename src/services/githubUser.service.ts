import axios, { AxiosInstance } from "axios";
import { config } from "../config/config";
import { Commit } from "../models/commit.model";
import { Repository } from "../models/repo.model";
import { User, UserSearchResponse } from "../models/user.model";

export class GithubUserService {
    private readonly request: AxiosInstance;

    public constructor() {
        this.request = axios.create({
            baseURL: config.baseUrl,
            headers: {},
            withCredentials: false,
            validateStatus: () => true,
        });
    }

    public async searchUsers(
        query: string
    ): Promise<UserSearchResponse[] | []> {
        try {
            const response = (
                await this.request.get(
                    `${config.baseUrl}/search/users?q=${query}+in:login`
                )
            ).data;
            return response;
        } catch (error) {
            return [];
        }
    }

    public async getUserByLoginName(login: string): Promise<User | null> {
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
                    `/users/${login}/repos?sort=updated&order=desc`
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

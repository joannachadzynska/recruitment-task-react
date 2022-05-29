import { AnyAction } from "redux";
import { Commit } from "../../models/commit.model";
import { Repository } from "../../models/repo.model";
import { UserDetails, UserSearchResponse } from "../../models/user.model";
import { GithubUsersActions } from "../action-creators/githubUsers.actions";

export interface ReposWithCommits extends Repository {
    commits: Commit[];
}

interface State {
    users: UserSearchResponse | null;
    user: UserDetails | null;
    repos: ReposWithCommits[];
    commits: Commit[];
    currentPage: number;
    searchTerm: string;
    loading: boolean;
    error: string | null;
}

const initalValue: State = {
    users: null,
    user: null,
    repos: [],
    commits: [],
    currentPage: 1,
    searchTerm: "",
    loading: false,
    error: null,
};

export const githubUsersReducer = (
    state = initalValue,
    action: AnyAction
): State => {
    switch (action.type) {
        case GithubUsersActions.SEARCH_USERS:
            return {
                ...state,
                users: null,
                loading: true,
            };

        case GithubUsersActions.SEARCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };

        case GithubUsersActions.SEARCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: null,
                error: action.payload,
            };

        case GithubUsersActions.GET_USER_BY_LOGIN_NAME:
            return {
                ...state,
                user: null,
                loading: true,
            };

        case GithubUsersActions.GET_USER_BY_LOGIN_NAME_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };

        case GithubUsersActions.GET_USER_BY_LOGIN_NAME_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload,
            };

        case GithubUsersActions.GET_USER_REPOS:
            return {
                ...state,
                repos: [],
                loading: true,
            };

        case GithubUsersActions.GET_USER_REPOS_SUCCESS:
            return {
                ...state,
                repos: action.payload,
                loading: false,
            };

        case GithubUsersActions.GET_USER_REPOS_FAILURE:
            return {
                ...state,
                loading: false,
                repos: [],
                error: action.payload,
            };

        case GithubUsersActions.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };

        case GithubUsersActions.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };

        case GithubUsersActions.CLEAR_USER_STATE:
            return {
                ...state,
                user: null,
                repos: [],
                commits: [],
            };

        default:
            return state;
    }
};

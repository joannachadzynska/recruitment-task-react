import { AppDispatch } from "../../app/store";
import { GithubUserService } from "../../services/githubUser.service";

const githubUsersService = new GithubUserService();

export enum GithubUsersActions {
    SEARCH_USERS = "SEARCH_USERS",
    SEARCH_USERS_SUCCESS = "SEARCH_USERS_SUCCESS",
    SEARCH_USERS_FAILURE = "SEARCH_USERS_FAILURE",
    GET_USER_BY_LOGIN_NAME = "GET_USER_BY_LOGIN_NAME",
    GET_USER_BY_LOGIN_NAME_SUCCESS = "GET_USER_BY_LOGIN_NAME_SUCCESS",
    GET_USER_BY_LOGIN_NAME_FAILURE = "GET_USER_BY_LOGIN_NAME_FAILURE",
    GET_USER_REPOS = "GET_USER_REPOS",
    GET_USER_REPOS_SUCCESS = "GET_USER_REPOS_SUCCESS",
    GET_USER_REPOS_FAILURE = "GET_USER_REPOS_FAILURE",
    GET_COMMITS = "GET_COMMITS",
    GET_COMMITS_SUCCESS = "GET_COMMITS_SUCCESS",
    GET_COMMITS_FAILURE = "GET_COMMITS_FAILURE",
}

export const searchUsers = (query: string) => async (dispatch: AppDispatch) => {
    dispatch({ type: GithubUsersActions.SEARCH_USERS });
    try {
        const data = await githubUsersService.searchUsers(query);
        dispatch({
            type: GithubUsersActions.SEARCH_USERS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GithubUsersActions.SEARCH_USERS_FAILURE,
            payload: error,
        });
    }
};

export const getUserByLoginName =
    (login: string) => async (dispatch: AppDispatch) => {
        dispatch({ type: GithubUsersActions.GET_USER_BY_LOGIN_NAME });
        try {
            const data = await githubUsersService.getUserByLoginName(login);
            dispatch({
                type: GithubUsersActions.GET_USER_BY_LOGIN_NAME_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GithubUsersActions.GET_USER_BY_LOGIN_NAME_FAILURE,
                payload: error,
            });
        }
    };

export const getUsersRepos =
    (login: string) => async (dispatch: AppDispatch) => {
        dispatch({ type: GithubUsersActions.GET_USER_REPOS });
        try {
            const data = await githubUsersService.getUserRepos(login);
            dispatch({
                type: GithubUsersActions.GET_USER_REPOS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GithubUsersActions.GET_USER_REPOS_FAILURE,
                payload: error,
            });
        }
    };

export const getCommits =
    (login: string, repo: string) => async (dispatch: AppDispatch) => {
        dispatch({ type: GithubUsersActions.GET_COMMITS });
        try {
            const data = await githubUsersService.getCommits(login, repo);
            dispatch({
                type: GithubUsersActions.GET_COMMITS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GithubUsersActions.GET_COMMITS_FAILURE,
                payload: error,
            });
        }
    };

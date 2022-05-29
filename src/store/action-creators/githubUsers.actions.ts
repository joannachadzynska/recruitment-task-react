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
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_SEARCH_TERM = "SET_SEARCH_TERM",
    CLEAR_USER_STATE = "CLEAR_USER_STATE",
}

export const setCurrentPage = (page: number) => ({
    type: GithubUsersActions.SET_CURRENT_PAGE,
    payload: page,
});

export const clearUserState = () => ({
    type: GithubUsersActions.CLEAR_USER_STATE,
});

export const setSearchTerm = (searchTerm: string) => ({
    type: GithubUsersActions.SET_SEARCH_TERM,
    payload: searchTerm,
});

export const searchUsers =
    (query: string, page: number) => async (dispatch: AppDispatch) => {
        dispatch({ type: GithubUsersActions.SEARCH_USERS });
        try {
            const data = await githubUsersService.searchUsers(query, page);
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

            const dataWithCommits = data.map(async (repo) => {
                const commits = await githubUsersService.getCommits(
                    login,
                    repo.name
                );

                const repository = {
                    ...repo,
                    commits: commits,
                };

                return repository;
            });

            const repos = await Promise.all(dataWithCommits);

            dispatch({
                type: GithubUsersActions.GET_USER_REPOS_SUCCESS,
                payload: repos,
            });
        } catch (error) {
            dispatch({
                type: GithubUsersActions.GET_USER_REPOS_FAILURE,
                payload: error,
            });
        }
    };

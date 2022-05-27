import { Action, AnyAction } from "redux";
import { Commit } from "../../models/commit.model";
import { Repository } from "../../models/repo.model";
import { User, UserSearchResponse } from "../../models/user.model";
import { GithubUsersActions } from "../action-creators/githubUsers.actions";

interface State {
    users: UserSearchResponse | null;
    user: User | null;
    repos: Repository[];
    commits: Commit[];
    loading: boolean;
    error: string | null;
}

const initalValue: State = {
    users: null,
    user: null,
    repos: [],
    commits: [],
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

        default:
            return state;
    }
};

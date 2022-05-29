import "./GithubUser.style.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import {
    clearUserState,
    getUserByLoginName,
    getUsersRepos,
} from "./../../store/action-creators/githubUsers.actions";

import UserCard from "./UserCard";
import UserRepos from "./UserRepos";

const GithubUser: React.FC = () => {
    const { login } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (login) {
            dispatch(getUserByLoginName(login));
            dispatch(getUsersRepos(login));
        }

        return () => {
            dispatch(clearUserState());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login]);

    return (
        <>
            <UserCard />
            <UserRepos />
        </>
    );
};

export default GithubUser;

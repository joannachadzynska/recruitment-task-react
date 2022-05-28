import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Repository } from "../../../models/repo.model";
import { useEffect } from "react";
import { getCommits } from "./../../../store/action-creators/githubUsers.actions";
import { RootState } from "../../../app/store";

interface RepoCardProps extends Repository {
    userLogin: string | undefined;
}

const RepoCard: React.FC<RepoCardProps> = ({ userLogin, full_name, name }) => {
    const dispatch = useAppDispatch();
    const commits = useAppSelector((state: RootState) => state.github.commits);
    useEffect(() => {
        if (!!userLogin) {
            dispatch(getCommits(userLogin, name));
        }
    }, [userLogin, name]);
    return (
        <div>
            <details>
                <summary>{full_name}</summary>

                <ul>
                    {!!commits &&
                        commits.map((commit) => (
                            <li key={commit.sha}>{commit.commit.message}</li>
                        ))}
                </ul>
            </details>
        </div>
    );
};

export default RepoCard;

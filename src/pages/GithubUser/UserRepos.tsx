import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import RepoCard from "./components/RepoCard";
import "./UserRepos.style.scss";

const UserRepos: React.FC = () => {
    const { login } = useParams();
    const repos = useAppSelector((state: RootState) => state.github.repos);

    return (
        <div className='user-repos'>
            <h2>Ostatnio aktualizowane projekty</h2>
            {!!repos &&
                repos.map((repo) => (
                    <RepoCard key={repo.id} userLogin={login} {...repo} />
                ))}
        </div>
    );
};

export default UserRepos;

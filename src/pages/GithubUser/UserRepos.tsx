import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import RepoCard from "./components/RepoCard";
import "./UserRepos.style.scss";

const UserRepos: React.FC = () => {
    const repos = useAppSelector((state: RootState) => state.github.repos);

    return (
        <div className='user-repos'>
            <h2>Ostatnio aktualizowane projekty</h2>
            {!!repos && repos.length > 0 ? (
                repos.map((repo) => <RepoCard key={repo.id} {...repo} />)
            ) : (
                <p>Brak repozytoriów do wyświetlenia</p>
            )}
        </div>
    );
};

export default UserRepos;

import { ReposWithCommits } from "../../../store/reducers/githubUsersReducer";

const RepoCard: React.FC<ReposWithCommits> = ({
    name,
    commits,
    description,
    created_at,
    updated_at,
}) => {
    const createdDate = new Intl.DateTimeFormat("pl-PL").format(
        new Date(created_at)
    );
    const updatedDate = new Intl.DateTimeFormat("pl-PL").format(
        new Date(updated_at)
    );
    return (
        <details className='repo-card'>
            <summary className='repo-card__details'>
                <span className='repo-card__details-title'>{name}</span>
            </summary>

            <ul className='repo-card__commits'>
                <p>
                    Opis:{" "}
                    <span>{description ? description : "brak danych"}</span>
                </p>
                <p>
                    Data utworzenia:{" "}
                    <span>{createdDate ? createdDate : "brak danych"}</span>
                </p>
                <p>
                    Data ostatniej aktualizacji:{" "}
                    <span>{updatedDate ? updatedDate : "brak danych"}</span>
                </p>
                <p>Lista ostatnich commitów:</p>
                {!!commits && commits.length > 0 ? (
                    commits
                        .splice(0, 5)
                        .map((commit) => (
                            <li key={commit.sha}>{commit.commit.message}</li>
                        ))
                ) : (
                    <p>Brak commitów do wyświetlenia</p>
                )}
            </ul>
        </details>
    );
};

export default RepoCard;

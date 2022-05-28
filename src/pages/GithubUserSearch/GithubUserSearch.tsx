import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import "./GithubUserSearch.style.scss";
import { SearchUserForm } from "./../../containers";
import { Loader, UsersList } from "../../components";

const GithubUserSearch: React.FC = () => {
    const { users, loading, error } = useAppSelector(
        (state: RootState) => state.github
    );

    return (
        <div className='user-search-container'>
            <SearchUserForm />
            {loading && <Loader />}
            {!!users ? (
                users.items.length > 0 ? (
                    <UsersList />
                ) : (
                    <div>Nie ma takiego użytkownika</div>
                )
            ) : null}
        </div>
    );
};

export default GithubUserSearch;

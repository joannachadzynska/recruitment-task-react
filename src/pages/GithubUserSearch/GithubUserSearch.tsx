import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { SearchUserForm } from "./../../containers";
import { Loader, Pagination, UsersList } from "../../components";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./../../app/hooks";
import {
    searchUsers,
    setCurrentPage,
} from "../../store/action-creators/githubUsers.actions";
import "./GithubUserSearch.style.scss";

const GithubUserSearch: React.FC = () => {
    const dispatch = useAppDispatch();
    const [totalCount, setTotalCount] = useState(0);
    const { users, loading, currentPage, searchTerm } = useAppSelector(
        (state: RootState) => state.github
    );

    const setPage = (page: number) => {
        dispatch(setCurrentPage(page));
        dispatch(searchUsers(searchTerm, page));
    };

    useEffect(() => {
        if (users) {
            const totalCount =
                users.total_count >= 1000 ? 1000 : users.total_count;
            setTotalCount(totalCount);
        }
    }, [users]);

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
            <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                siblingCount={1}
                pageSize={30}
                onPageChange={(page) => setPage(page)}
            />
        </div>
    );
};

export default GithubUserSearch;

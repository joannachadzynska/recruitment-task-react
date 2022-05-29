import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Form, Input } from "../../components";
import {
    searchUsers,
    setSearchTerm,
} from "../../store/action-creators/githubUsers.actions";
import "./SearchUserForm.style.scss";

const SearchUserForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { searchTerm } = useAppSelector((state) => state.github);
    const [error, setError] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // dispatch(setSearchTerm(""));

        if (!!searchTerm) {
            dispatch(searchUsers(searchTerm, 1));
            setError("");
        } else {
            setError("Wpisz nazwę użytkownika");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                id='search'
                type='search'
                value={searchTerm}
                error={error}
                placeholder='Wyszukaj użytkownika'
                onChange={handleChange}
            />

            <button type='submit' className='search-btn'>
                Szukaj
            </button>
        </Form>
    );
};

export default SearchUserForm;

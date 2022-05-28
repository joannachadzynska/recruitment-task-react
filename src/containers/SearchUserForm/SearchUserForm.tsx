import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Form, Input } from "../../components";
import { searchUsers } from "../../store/action-creators/githubUsers.actions";
import "./SearchUserForm.style.scss";

const SearchUserForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchTerm("");

        if (!!searchTerm) {
            dispatch(searchUsers(searchTerm));
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

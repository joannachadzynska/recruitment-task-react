import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Form, Input } from "../../components";
import { searchUsers } from "../../store/action-creators/githubUsers.actions";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

interface SearchUserFormProps {}

const SearchUserForm: React.FC<SearchUserFormProps> = () => {
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
        <div className='search-form'>
            <Form onSubmit={handleSubmit}>
                <Input
                    id='search'
                    type='search'
                    inputMode='text'
                    value={searchTerm}
                    error={error}
                    placeholder='Wyszukaj użytkownika'
                    onChange={handleChange}
                />

                <button type='submit' className='search-form__button'>
                    <SearchIcon style={{ width: 50, height: 50 }} />
                </button>
            </Form>
        </div>
    );
};

export default SearchUserForm;

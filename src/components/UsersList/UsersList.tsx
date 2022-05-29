import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { UsersListItem } from "../UsersListItem";
import "./UsersList.style.scss";

const UsersList: React.FC = () => {
    const { users } = useAppSelector((state: RootState) => state.github);

    return (
        <ul className='users-list'>
            {!!users &&
                users.items.length > 0 &&
                users.items.map((user) => (
                    <UsersListItem key={user.id} {...user} />
                ))}
        </ul>
    );
};

export default UsersList;

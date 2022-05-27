import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { UsersListItem } from "../UsersListItem";

interface UsersListProps {}

const UsersList: React.FC<UsersListProps> = () => {
    const { users } = useAppSelector((state: RootState) => state.github);

    return (
        <div>
            <ul>
                {!!users &&
                    users.items.map((user) => (
                        <UsersListItem key={user.id} {...user} />
                    ))}
            </ul>
        </div>
    );
};

export default UsersList;

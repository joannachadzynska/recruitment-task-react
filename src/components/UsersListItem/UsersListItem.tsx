import { Link } from "react-router-dom";
import { User } from "../../models/user.model";
import { Routes as ROUTES } from "../../constants/Routes";
import "./UsersListItem.style.scss";

const UsersListItem: React.FC<User> = ({ login, avatar_url, type }) => {
    return (
        <li>
            <Link to={`${ROUTES.GithubUser}/${login}`}>
                <div className='user'>
                    <div className='user__avatar'>
                        <img src={avatar_url} alt='avatar' />
                    </div>
                    <div className='user__info'>
                        <span className='user__info__name'>{login}</span>
                        <span className='user__info__type'>Typ: {type}</span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default UsersListItem;

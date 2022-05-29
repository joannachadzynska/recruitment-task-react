import { UserDetails } from "../../../models/user.model";

const CardHeader: React.FC<UserDetails> = ({
    name,
    avatar_url,
    login,
    created_at,
}) => {
    const joinedDate = new Intl.DateTimeFormat("pl-PL").format(
        new Date(created_at)
    );
    return (
        <div className='card-header'>
            <div className='card-header__avatar'>
                <img src={avatar_url} alt={name} />
            </div>
            <div className='card-header__info'>
                <h2 className='card-header__info-name'>{name}</h2>
                <p className='card-header__info-login'>{`@${login}`}</p>
                <p className='card-header__info-join'>
                    Data dołączenia: {joinedDate}
                </p>
            </div>
        </div>
    );
};

export default CardHeader;

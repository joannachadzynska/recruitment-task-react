import { UserDetails } from "../../../models/user.model";

const CardHeader: React.FC<UserDetails> = ({ name, avatar_url, login }) => (
    <div className='card-header'>
        <div className='card-header__avatar'>
            <img src={avatar_url} alt={name} />
        </div>
        <div className='card-header__info'>
            <h2 className='card-header__info-name'>{name}</h2>
            <p className='card-header__info-login'>{`@${login}`}</p>
            <p className='card-header__info-join'>Data dołączenia: </p>
        </div>
    </div>
);

export default CardHeader;

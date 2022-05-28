import { UserDetails } from "../../../models/user.model";

const CardBody: React.FC<UserDetails> = ({
    bio,
    public_repos,
    followers,
    following,
}) => (
    <div className='card-body'>
        <p className='card-body__bio'>{bio}</p>
        <div className='card-body__summary'>
            <div className='card-body__summary-item'>
                <p>Repozytoria</p>
                <p>{public_repos}</p>
            </div>
            <div className='card-body__summary-item'>
                <p>Obserwujący</p>
                <p>{followers}</p>
            </div>
            <div className='card-body__summary-item'>
                <p>Obserwowani</p>
                <p>{following}</p>
            </div>
        </div>
    </div>
);

export default CardBody;

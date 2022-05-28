import { ReactComponent as LocationIcon } from "../../../assets/icons/icon-location.svg";
import { ReactComponent as CompanyIcon } from "../../../assets/icons/icon-company.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/icon-twitter.svg";
import { ReactComponent as WebsiteIcon } from "../../../assets/icons/icon-website.svg";
import { UserDetails } from "../../../models/user.model";
import { Link } from "react-router-dom";

const CardFooter: React.FC<UserDetails> = ({
    location,
    blog,
    twitter_username,
    company,
}) => {
    return (
        <div className='card-footer'>
            <div className='card-footer__info'>
                <LocationIcon className='card-footer__info-icon' />
                <span>{location ? location : "brak danych"}</span>
            </div>
            <div className='card-footer__info'>
                <WebsiteIcon className='card-footer__info-icon' />
                <a href={blog} target='_blank' rel='noopener noreferrer'>
                    {blog ? blog : "brak danych"}
                </a>
            </div>
            <div className='card-footer__info'>
                <TwitterIcon className='card-footer__info-icon' />
                <span>
                    {twitter_username ? twitter_username : "brak danych"}
                </span>
            </div>
            <div className='card-footer__info'>
                <CompanyIcon className='card-footer__info-icon' />
                <span>{company ? company : "brak danych"}</span>
            </div>
        </div>
    );
};

export default CardFooter;

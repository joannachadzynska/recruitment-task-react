import { NavLink } from "react-router-dom";
import { Routes as ROUTES } from "../../constants/Routes";
import "./Navigation.style.scss";

const Navigation: React.FC = () => (
    <header>
        <nav className='wrapper'>
            <NavLink to={ROUTES.Github}>Zadanie 1</NavLink>
            <NavLink to={ROUTES.About}>Zadanie 2</NavLink>
            <NavLink to={ROUTES.Factorial}>Zadanie 3</NavLink>
        </nav>
    </header>
);

export default Navigation;

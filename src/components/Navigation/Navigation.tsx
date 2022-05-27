import { NavLink } from "react-router-dom";
import { Routes as ROUTES } from "../../constants/Routes";
import "./Navigation.style.scss";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
    const arr = Object.keys(ROUTES).map((name) => {
        const path = ROUTES[name as keyof typeof ROUTES];
        return (
            <NavLink key={name} to={path}>
                {name}
            </NavLink>
        );
    });

    return <nav>{arr}</nav>;
};

export default Navigation;

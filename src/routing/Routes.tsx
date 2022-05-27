import { Navigate, Route, Routes } from "react-router-dom";
import { Routes as ROUTES } from "../constants/Routes";
import { About, Factorial, GithubUser, GithubUserSearch, Home } from "../pages";

interface RoutesContainerProps {}

const RoutesContainer: React.FC<RoutesContainerProps> = () => {
    return (
        <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path={ROUTES.Home} element={<Home />} />
            <Route path={ROUTES.Github} element={<GithubUserSearch />} />
            <Route
                path={`${ROUTES.GithubUser}/:login`}
                element={<GithubUser />}
            />
            <Route path={ROUTES.About} element={<About />} />
            <Route path={ROUTES.Factorial} element={<Factorial />} />
            <Route path='*' element={<Navigate to={ROUTES.Home} replace />} />
        </Routes>
    );
};

export default RoutesContainer;

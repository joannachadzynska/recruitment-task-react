import { Navigate, Route, Routes } from "react-router-dom";
import { Routes as ROUTES } from "../constants/Routes";
import { About, Factorial, GithubUser, GithubUserSearch } from "../pages";

const RoutesContainer: React.FC = () => (
    <Routes>
        <Route path={ROUTES.Github} element={<GithubUserSearch />} />
        <Route path={`${ROUTES.GithubUser}/:login`} element={<GithubUser />} />
        <Route path={ROUTES.About} element={<About />} />
        <Route path={ROUTES.Factorial} element={<Factorial />} />
        <Route path='*' element={<Navigate to={ROUTES.Github} replace />} />
    </Routes>
);

export default RoutesContainer;

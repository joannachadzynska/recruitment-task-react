import "./App.scss";
import {
    BrowserRouter as Router,
    Navigate,
    NavLink,
    Route,
    Routes,
} from "react-router-dom";

import { Routes as ROUTES } from "./constants/Routes";
import { About, Factorial, Github, Home, Login, NotFound } from "./pages";
import ProtectedRoute from "./routing/ProtectedRoute";
import {
    useGetCommitsQuery,
    useGetUserByLoginNameQuery,
    useGetUserReposQuery,
} from "./store/github";

function App() {
    const app = useGetCommitsQuery({
        name: "joannachadzynska",
        repo: "recruitment-task-react",
    });

    console.log(app.currentData);
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route index element={<Home />} />
                <Route path={ROUTES.Home} element={<Home />} />

                <Route path={ROUTES.Github} element={<Github />}></Route>

                <Route path={ROUTES.Login} element={<Login />}></Route>
                <Route path={ROUTES.About} element={<About />} />
                <Route path={ROUTES.Factorial} element={<Factorial />} />
                <Route
                    path='*'
                    element={<Navigate to={ROUTES.Home} replace />}
                />
            </Routes>
        </Router>
    );
}

const Navigation = () => {
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

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./containers";
import Routes from "./routing/Routes";

const App = () => (
    <Router>
        <Layout>
            <Routes />
        </Layout>
    </Router>
);

export default App;

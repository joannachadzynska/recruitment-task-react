interface HomePageProps {}

import "./Home.style.scss";

const HomePage: React.FC<HomePageProps> = () => {
    return <h2>Landing (Public: anyone can access this page)</h2>;
};

export default HomePage;

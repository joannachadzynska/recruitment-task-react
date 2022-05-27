import "./Home.style.scss";
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    return <h2>Landing (Public: anyone can access this page)</h2>;
};

export default HomePage;

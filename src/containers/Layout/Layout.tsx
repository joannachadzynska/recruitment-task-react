import { Footer, Navigation } from "../../components";
import "./Layout.style.scss";
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
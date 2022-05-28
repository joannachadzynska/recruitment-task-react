import { Navigation } from "../../components";
import "./Layout.style.scss";
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navigation />
            <main className='wrapper'>{children}</main>
        </>
    );
};

export default Layout;

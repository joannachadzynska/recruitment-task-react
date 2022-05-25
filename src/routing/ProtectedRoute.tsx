import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
    user: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children }) => {
    if (!user) {
        return <Navigate to='/login' replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import CardHeader from "./components/CardHeader";

const UserCard: React.FC = () => {
    const user = useAppSelector((state: RootState) => state.github.user);
    return (
        <div className='card'>
            {user && (
                <>
                    <CardHeader {...user} />
                    <CardBody {...user} />
                    <CardFooter {...user} />
                </>
            )}
        </div>
    );
};

export default UserCard;

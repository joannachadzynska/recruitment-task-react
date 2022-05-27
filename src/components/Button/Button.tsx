interface ButtonProps {
    children: React.ReactNode;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...rest }) => {
    return (
        <button {...rest} type='button' onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

interface FormProps {
    children: React.ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, ...rest }) => {
    return (
        <form {...rest} onSubmit={onSubmit} noValidate>
            {children}
        </form>
    );
};

export default Form;

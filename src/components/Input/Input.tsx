import "./Input.style.scss";
interface InputProps {
    id: string;
    placeholder?: string;
    error?: string;
    value?: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: "text" | "search" | "number";
    min?: string;
    max?: string;
}

const Input: React.FC<InputProps> = ({
    id,
    placeholder,
    error,
    onChange,
    value,
    min,
    max,
    ...rest
}) => {
    return (
        <div className='input'>
            <input
                className='input__input-field'
                {...rest}
                id={id}
                min={min}
                max={max}
                value={value}
                aria-invalid={!!error}
                onChange={onChange}
                placeholder={`${placeholder}...`}
            />
            {error && <div className='input__error'>{error}</div>}
        </div>
    );
};

export default Input;

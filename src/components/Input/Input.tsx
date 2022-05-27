interface InputProps {
    id: string;
    label?: string;
    placeholder?: string;
    error?: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: "text" | "search" | "number";
    inputMode:
        | "text"
        | "search"
        | "email"
        | "tel"
        | "url"
        | "none"
        | "numeric"
        | "decimal"
        | undefined;
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    placeholder,
    error,
    onChange,
    value,
    ...rest
}) => {
    return (
        <div className='input-container'>
            <label className='input-container__label' htmlFor={id}>
                {label}
            </label>
            <input
                className='input-container__input'
                {...rest}
                type='text'
                autoComplete='off'
                value={value}
                inputMode='text'
                aria-invalid={!!error}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error && <div className='input-container__error'>{error}</div>}
        </div>
    );
};

export default Input;

import { useState } from "react";
import { Form, Input } from "../../components";
import "./Factorial.style.scss";

const Factorial: React.FC = () => {
    const [number, setNumber] = useState<number>(1);
    const [result, setResult] = useState<number[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^\d]/, "");
        if (+value !== 0 && +value <= 10000) {
            setNumber(+value);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTimeout(() => {
            const num = factorial(number);
            setResult([...result, num]);
        }, 500);
    };

    const factorial = (n: number): number =>
        n === 1 ? 1 : n * factorial(n - 1);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input
                    id='factorial'
                    type='number'
                    min='1'
                    max='9577'
                    value={number}
                    onChange={handleChange}
                />
                <button type='submit' className='factorial-btn'>
                    Oblicz
                </button>
            </Form>
            <div className='results'>
                <ul>
                    {result.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Factorial;

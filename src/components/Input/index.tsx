import React, { FC, useState } from 'react';
import * as ST from './styled';

export enum InputTypes {
    email = 'email',
    password = 'password',
    text = 'text',
}

const REG_EXP: { [key: string]: RegExp } = {
    [InputTypes.email]: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

interface IProps {
    value: string;
    onChange: (v: string) => void;
    onError?: (v: boolean) => void;
    className?: string;
    type?: InputTypes;
    label?: string;
    required?: boolean;
}

const Input: FC<IProps> = ({ type = InputTypes.text, value, onChange, className, required, label, onError }) => {
    const [isError, setIsError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onChange(value);
    };

    const check = (value: string) => {
        const regexp = REG_EXP[type];
        let isValid = true;

        if (regexp) {
            isValid = regexp.test(value);
        }

        if (required && isValid) {
            isValid = value.trim().length !== 0;
        }

        return isValid;
    };

    const handleBlur = () => {
        const isError = !check(value);

        setIsError(isError);

        if (onError) {
            onError(isError);
        }
    };

    return (
        <ST.Wrapper className={className}>
            <ST.Header>
                {label && <ST.Label isError={isError}>{label}</ST.Label>}
                {!required && <ST.OptionalText>Опционально</ST.OptionalText>}
            </ST.Header>
            <ST.Input isError={isError} type={type} value={value} onChange={handleChange} onBlur={handleBlur} />
        </ST.Wrapper>
    );
};

export default Input;

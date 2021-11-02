import React, { FC, useState } from 'react';
import Input, { InputTypes } from 'components/Input';
import Button from 'components/Button';
import { useMutation } from 'react-query';
import { ILoginData, loginRequest } from 'api/auth';
import * as ST from './styled';

const LoginPage: FC = () => {
    const [login, setLogin] = useState('');
    const [sublogin, setSublogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginError, setLoginError] = useState(true);
    const [isPasswordError, setIsPasswordError] = useState(true);
    const { isLoading, mutate } = useMutation((data: ILoginData) => loginRequest(data))
    const disabled = !login || !password || isPasswordError || isLoginError;

    return (
        <ST.Container>
            <ST.LoginBlock>
                <ST.Title>API-консолька</ST.Title>
                <Input required value={login} onChange={setLogin} label='Логин' onError={setLoginError} />
                <Input value={sublogin} onChange={setSublogin} label='Сублогин' />
                <Input required type={InputTypes.password} value={password} onChange={setPassword} label='Пароль' onError={setIsPasswordError} />
                <Button isLoading={isLoading} disabled={disabled} onClick={() => mutate({ login, password, sublogin })} text='Войти' />
            </ST.LoginBlock>
        </ST.Container>
    );
};

export default LoginPage;

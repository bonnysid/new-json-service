import React, { FC, useEffect, useState } from 'react';
import Input, { InputTypes } from 'components/Input';
import Button from 'components/Button';
import ErrorPlank from 'components/ErrorPlank';
import { useLogin } from 'hooks/useLogin';
import * as ST from './styled';

const LoginPage: FC = () => {
    const [login, setLogin] = useState('');
    const [sublogin, setSublogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginError, setLoginError] = useState(true);
    const [isPasswordError, setIsPasswordError] = useState(true);
    const { isLoading, doLogin, isError, error } = useLogin();
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        setIsDisabled(!login || !password || isPasswordError || isLoginError);
    }, [login, password, isLoginError, isPasswordError]);

    return (
        <ST.Container>
            <img src="/icons/logo.svg" alt="logo"/>
            <ST.LoginBlock>
                <ST.Title>API-консолька</ST.Title>
                <ErrorPlank display={isError} errorTitle={'Вход не вышел'} errorMessage={JSON.stringify({ id: error?.id, explain: error?.explain })} />
                <Input required value={login} onChange={setLogin} label='Логин' onError={setLoginError} />
                <Input value={sublogin} onChange={setSublogin} label='Сублогин' />
                <Input required type={InputTypes.password} value={password} onChange={setPassword} label='Пароль' onError={setIsPasswordError} />
                <Button isLoading={isLoading} disabled={isDisabled} onClick={() => doLogin({ login, password, sublogin })} text='Войти' />
            </ST.LoginBlock>
            <ST.LinkToGithub href='https://github.com/bonnysid' target='_blank'>@bonnysid</ST.LinkToGithub>
        </ST.Container>
    );
};

export default LoginPage;

import sendsay from 'helpers/sendsay';
import { setCookie } from 'helpers/cookie';

export interface ILoginData {
    password: string;
    login: string;
    sublogin?: string;
}

export interface ILoginResponse {
    login: string
    session: string
    sublogin?: string
}

export interface ILoginError {
    id: string;
    explain: string;
}

export const loginRequest = async (body: ILoginData): Promise<ILoginResponse> => {
    await sendsay.login(body);
    setCookie({
        name: 'sendsay_session',
        value: sendsay.session,
    });
    const { sublogin } = await sendsay.request({ action: 'pong' });
    return {
        login: body.login,
        session: sendsay.session,
        sublogin,
    };
}

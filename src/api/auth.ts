import sendsay from 'helpers/sendsay';
import { setCookie } from 'helpers/cookie';

export interface ILoginData {
    password: string;
    login: string;
    sublogin?: string;
}

export const loginRequest = async (body: ILoginData) => {
    await sendsay.login(body);
    setCookie({
        name: 'sendsay_session',
        value: sendsay.session,
    });
}

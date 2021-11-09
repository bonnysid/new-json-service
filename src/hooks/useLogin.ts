import { useMutation } from 'react-query';
import { ILoginData, ILoginError, ILoginResponse, loginRequest } from 'api/auth';
import { useActions } from 'hooks/useActions';

export const useLogin = () => {
    const { login } = useActions();
    const {
        isLoading,
        mutate,
        isError,
        error
    } = useMutation<ILoginResponse, ILoginError, ILoginData, unknown>((data) => loginRequest(data), {
        onSuccess: (data) => {
            login(data);
        },
    });

    return {
        isLoading,
        doLogin: mutate,
        isError,
        error,
    };
}

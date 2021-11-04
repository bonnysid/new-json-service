import { useMutation } from 'react-query';
import { IQuerySendsayResponse, ISendsayRequest, sendQuery } from 'api/console';
import { useActions } from 'hooks/useActions';
import { v4 as uuidv4 } from 'uuid';

export const useSendQuery = () => {
    const { addToHistory } = useActions();

    const handleResponse = (response: IQuerySendsayResponse, query: ISendsayRequest, isSuccess: boolean = true) => {
        addToHistory({
            id: uuidv4(),
            content: query,
            isSuccess,
            response,
        });
    };

    const {
        data: response,
        error,
        isError,
        isSuccess,
        isLoading,
        mutate: executeQuery,
    } = useMutation<IQuerySendsayResponse, IQuerySendsayResponse, ISendsayRequest, unknown>(query => sendQuery(query), {
        onError: (error, query) => {
            handleResponse(error, query, false);
        },
        onSuccess: (response, query) => {
            handleResponse(response, query);
        },
    });

    return {
        response,
        error,
        isLoading,
        executeQuery,
        isSuccess,
        isError
    };
}

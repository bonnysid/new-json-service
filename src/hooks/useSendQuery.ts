import { useMutation } from 'react-query';
import { IQuerySendsayResponse, ISendsayRequest, sendQuery } from 'api/console';
import { useActions } from 'hooks/useActions';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { IQueryHistoryItem } from 'store/reducers/console';

const MAX_HISTORY_ITEMS = 20;

export const useSendQuery = () => {
    const history = useTypedSelector(state => state.console.history)
    const { addToHistory, deleteFromHistory } = useActions();

    const handleResponse = (response: IQuerySendsayResponse, query: ISendsayRequest, isSuccess: boolean = true) => {
        const oldQuery = history.find(item => item.content.action === query.action);
        const newQuery: IQueryHistoryItem = {
            id: uuidv4(),
            content: query,
            isSuccess,
            response,
        };

        if (oldQuery) {
            deleteFromHistory(oldQuery);
        } else if (history.length >= MAX_HISTORY_ITEMS) {
            deleteFromHistory(history[history.length - 1]);
        }

        addToHistory(newQuery);
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

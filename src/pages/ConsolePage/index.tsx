import React, { useState } from 'react';
import HistoryCarousel from 'components/HistoryCarousel';
import QueryResponseBlock from 'components/QueryResponseBlock';
import { ISendsayRequest } from 'api/console';
import Layout from 'components/Layout';
import { useSendQuery } from 'hooks/useSendQuery';
import { useTypedSelector } from 'hooks/useTypedSelector';

const ConsolePage = () => {
    const history = useTypedSelector(state => state.console.history);
    const [query, setQuery] = useState<ISendsayRequest>({ action: 'pong' });
    const { response, isError, error, isLoading, executeQuery } = useSendQuery();

    const handleSendClick = () => {
        if (checkQuery()) {
            executeQuery(query);
        }
    };

    const onExecuteQuery = (query: ISendsayRequest) => {
        setQuery(query);
        executeQuery(query);
    };

    const checkQuery = () => {
        const strHistory = history.map(query => JSON.stringify(query));
        const strQuery = JSON.stringify(query);
        return !strHistory.includes(strQuery);
    };

    return (
        <Layout>
            <HistoryCarousel onExecuteQuery={onExecuteQuery} />
            <QueryResponseBlock
                isError={isError}
                isLoading={isLoading}
                response={error || response}
                handleSendClick={handleSendClick}
                query={query}
                setQuery={setQuery}
            />
        </Layout>
    );
};

export default ConsolePage;
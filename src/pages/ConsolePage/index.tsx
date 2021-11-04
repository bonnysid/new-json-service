import React, { useState } from 'react';
import HistoryCarousel from 'components/HistoryCarousel';
import QueryResponseBlock from 'components/QueryResponseBlock';
import { ISendsayRequest } from 'api/console';
import Layout from 'components/Layout';
import { useSendQuery } from 'hooks/useSendQuery';

const ConsolePage = () => {
    const [query, setQuery] = useState<ISendsayRequest>({ action: 'pong' });
    const { response, isError, error, isLoading, executeQuery } = useSendQuery();

    const handleSendClick = () => {
        executeQuery(query);
    };

    const onExecuteQuery = (query: ISendsayRequest) => {
        setQuery(query);
        executeQuery(query);
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

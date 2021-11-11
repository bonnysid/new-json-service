import React, { useState } from 'react';
import HistoryCarousel from 'components/HistoryCarousel';
import QueryResponseBlock from 'components/QueryResponseBlock';
import { ISendsayRequest } from 'api/console';
import Layout from 'components/Layout';
import { useSendQuery } from 'hooks/useSendQuery';
import { formatObject } from 'helpers/utils';

const ConsolePage = () => {
    const [query, setQuery] = useState<ISendsayRequest>({ action: 'pong' });
    const [isJsonError, setJsonError] = useState(false);
    const [isFormatError, setIsFormatError] = useState(false);
    const [formattedQuery, setFormattedQuery] = useState('')
    const { response, isError, error, isLoading, executeQuery } = useSendQuery();

    const handleFormatClick = () => {
        setFormattedQuery(formatObject(query));
        setIsFormatError(false);
    };

    const handleSendClick = (query: ISendsayRequest) => {
        if (!isJsonError && !isFormatError) {
            executeQuery(query);
        }
    };

    const handleChangeQuery = (query: ISendsayRequest, queryStr?: string) => {
        const correctQuery = formatObject(query);
        setIsFormatError(correctQuery !== queryStr);
        setQuery(query);
    };

    const onExecuteQuery = (query: ISendsayRequest) => {
        handleChangeQuery(query);
        handleSendClick(query);
    };

    return (
        <Layout>
            <HistoryCarousel onExecuteQuery={onExecuteQuery} />
            <QueryResponseBlock
                isError={isError}
                isLoading={isLoading}
                formattedQuery={formattedQuery}
                handleFormatClick={handleFormatClick}
                response={error || response}
                handleSendClick={() => handleSendClick(query)}
                query={query}
                onChange={handleChangeQuery}
                isJsonError={isJsonError || isFormatError}
                onError={setJsonError}
            />
        </Layout>
    );
};

export default ConsolePage;

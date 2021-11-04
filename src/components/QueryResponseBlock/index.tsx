import React, { FC, useState } from "react";
import Footer from 'components/QueryResponseBlock/Footer';
import ResponseTextarea from 'components/QueryResponseBlock/ResponseTextarea';
import RequestTextarea from 'components/QueryResponseBlock/RequestTextarea';
import { IQuerySendsayResponse, ISendsayRequest } from 'api/console';
import * as ST from './styled';

export interface QueryResponseBlockProps {
    query: ISendsayRequest;
    setQuery: React.Dispatch<React.SetStateAction<ISendsayRequest>>;
    handleSendClick: () => void;
    isLoading: boolean;
    isError: boolean;
    response?: IQuerySendsayResponse;
}

const QueryResponseBlock: FC<QueryResponseBlockProps> = ({query, setQuery, isError, response, isLoading, handleSendClick}) => {
    const [formattedQuery, setFormattedQuery] = useState('')
    const [isJsonError, setJsonError] = useState(false)

    const handleFormatClick = () => {
        setFormattedQuery(JSON.stringify(query, null, 2));
    };

    const handleError = (v: boolean) => {
        setJsonError(v);
    };

    const handleChange = (value: ISendsayRequest) => {
        setQuery(value);
    };

    return (
        <ST.Wrapper>
            <ST.TextareasContainer>
                <RequestTextarea
                    query={query}
                    onChange={handleChange}
                    onError={handleError}
                    formattedQuery={formattedQuery}
                    isError={isJsonError || isError}
                />

                <ResponseTextarea isError={isError} response={response} />
            </ST.TextareasContainer>

            <Footer
                handleSendClick={handleSendClick}
                handleFormatClick={handleFormatClick}
                isLoading={isLoading}
            />
        </ST.Wrapper>
    )
}

export default QueryResponseBlock

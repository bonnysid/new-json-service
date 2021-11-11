import React, { FC } from "react";
import Footer from 'components/QueryResponseBlock/Footer';
import ResponseTextarea from 'components/QueryResponseBlock/ResponseTextarea';
import RequestTextarea from 'components/QueryResponseBlock/RequestTextarea';
import { IQuerySendsayResponse, ISendsayRequest } from 'api/console';
import * as ST from './styled';

export interface QueryResponseBlockProps {
    query: ISendsayRequest;
    onChange: (query: ISendsayRequest, vStr: string) => void;
    handleSendClick: () => void;
    handleFormatClick: () => void;
    formattedQuery: string;
    isLoading: boolean;
    isError: boolean;
    isJsonError: boolean;
    response?: IQuerySendsayResponse;
    onError: (b: boolean) => void;
}

const QueryResponseBlock: FC<QueryResponseBlockProps> = ({
     query,
     formattedQuery,
     isJsonError,
     handleFormatClick,
     onChange,
     isError,
     response,
     isLoading,
     handleSendClick,
     onError,
}) => {
    return (
        <ST.Wrapper>
            <ST.TextareasContainer>
                <RequestTextarea
                    query={query}
                    onChange={onChange}
                    onError={onError}
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

import React, { FC } from 'react';
import { Resizable } from 're-resizable';
import Editor from 'components/Editor';
import { RESIZE_SETTINGS } from 'components/QueryResponseBlock/RequestTextarea/data';
import { ISendsayRequest } from 'api/console';
import { REQUEST_LABEL } from 'constants/names';
import * as ST from '../ResponseTextarea/styled';

interface IProps {
    isError?: boolean;
    query: ISendsayRequest;
    onChange: (v: ISendsayRequest) => void;
    onError: (e: boolean) => void
    formattedQuery: string;
}

const RequestTextarea: FC<IProps> = ({ isError, onChange, onError, query, formattedQuery }) => {
    return (
        <Resizable {...RESIZE_SETTINGS}>
            <ST.Wrapper>
                <ST.Label isError={isError}>{REQUEST_LABEL}</ST.Label>
                <ST.Row>
                    <Editor
                        value={query}
                        onChange={onChange}
                        onError={onError}
                        formattedValue={formattedQuery}
                        isError={isError}
                    />
                    <ST.Dots />
                </ST.Row>
            </ST.Wrapper>
        </Resizable>
    );
};

export default RequestTextarea;

import React, { FC } from 'react';
import { IQuerySendsayResponse } from 'api/console';
import { RESPONSE_LABEL } from 'constants/names';
import * as ST from './styled';

interface IProps {
    response?: IQuerySendsayResponse | null;
    isError?: boolean;
}

const ResponseTextarea: FC<IProps> = ({ response, isError }) => {
    return (
        <ST.Wrapper>
            <ST.Label isError={isError}>{RESPONSE_LABEL}</ST.Label>
            <ST.Textarea
                value={response ? JSON.stringify(response, null, 4) : ''}
                disabled
                isError={isError}
            />
        </ST.Wrapper>
    );
};

export default ResponseTextarea;

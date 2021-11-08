import React, { FC, useState } from 'react';
import { IQueryHistoryItem } from 'store/reducers/console';
import { REQUEST_LABEL, RESPONSE_LABEL } from 'constants/names';
import * as ST from './styled';

interface IProps {
    query: IQueryHistoryItem;
}

const Query: FC<IProps> = ({ query }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleInfo = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <ST.Wrapper>
            <ST.Header onClick={toggleInfo}>
                <ST.Status isSuccess={query.isSuccess} />
                <ST.Action>{query.content.action}</ST.Action>
            </ST.Header>
            <ST.Info isOpen={isOpen}>
                <ST.StatusText isSuccess={query.isSuccess}>
                    Status: <span>{query.isSuccess ? 'success' : 'error'}</span>
                </ST.StatusText>
                <ST.QueryResponseBlock>
                    <ST.Col>
                        <ST.Label>{REQUEST_LABEL}</ST.Label>
                        <ST.JSONBlock value={JSON.stringify(query.content, null, 2)} />
                    </ST.Col>
                    <ST.Col>
                        <ST.Label>{RESPONSE_LABEL}</ST.Label>
                        <ST.JSONBlock value={JSON.stringify(query.response, null, 2)} />
                    </ST.Col>
                </ST.QueryResponseBlock>
            </ST.Info>
        </ST.Wrapper>
    );
};

export default Query;

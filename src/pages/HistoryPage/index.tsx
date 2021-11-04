import React from 'react';
import Layout from 'components/Layout';
import { useTypedSelector } from 'hooks/useTypedSelector';
import Query from 'components/Query';
import * as ST from './styled';

const HistoryPage = () => {
    const queries = useTypedSelector(state => state.console.savedHistory);

    return (
        <Layout>
            <ST.Container>
                {queries.map(query => <Query query={query} />)}
            </ST.Container>
        </Layout>
    );
};

export default HistoryPage;

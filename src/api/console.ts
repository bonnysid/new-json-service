import sendsay from 'helpers/sendsay';

export interface ISendsayRequest {
    action: string;
    [key: string]: string | number;
}

export interface IQuerySendsayResponse {
    [key: string]: string;
}

export const sendQuery = (query: ISendsayRequest) => sendsay.request(query);

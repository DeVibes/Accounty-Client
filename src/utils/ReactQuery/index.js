export * from './ReactQuery';

const QueryKeys = {
    FETCH_TRANSACTIONS: 'fetchTransactions',
};

const QueryStatus = {
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
  IDLE: 'idle'
}

Object.freeze(QueryKeys);
Object.freeze(QueryStatus);

export { QueryKeys, QueryStatus };
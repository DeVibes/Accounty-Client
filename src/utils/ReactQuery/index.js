export * from './ReactQuery';

const QueryKeys = {
    FETCH_TRANSACTIONS: 'fetchTransactions',
    FETCH_PAYMENT_TYPES: 'fetchPaymentTypes',
    FETCH_CATEGOIRES: 'fetchCategories'
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
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

export const ReactQuery = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  );
};

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
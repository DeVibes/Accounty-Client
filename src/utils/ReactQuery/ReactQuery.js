import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
//  import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

export const ReactQuery = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

const QueryKeys = {
    FETCH_TRANSACTIONS: 'fetchTransactions',
    FETCH_PAYMENT_TYPES: 'fetchPaymentTypes',
    FETCH_CATEGOIRES: 'fetchCategories',
    FETCH_BALANCE: 'fetchBalance',
    FETCH_TOTAL_BY_CATEGORY: 'fetchTotalByCat',
    FETCH_YEARLY_TOTAL_BY_MONTH: 'fetchYearlyTotalByMonth'
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
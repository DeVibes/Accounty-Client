import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const ReactQuery = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  );
};

export class ReactQueryStatus {
  static IsLoading = new ReactQueryStatus('loading');
  static IsError = new ReactQueryStatus('error');
  static IsSuccess = new ReactQueryStatus('success');
  static IsIdle = new ReactQueryStatus('idle');
  constructor(state) {
    this.state = state;
  }
} 
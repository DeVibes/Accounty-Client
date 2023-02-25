import React from 'react';
import { CategoryChart } from './components/CategoryChart';
import { CategoriesArray } from './components/CategoriesArray';
import { useFetchBalance } from './hooks/fetchBalance.hook';
import { AnalyticsLoader } from './components/AnalyticsLoader';
import { AnalyticsError } from './components/AnalyticsError';
import { AnalyticsNoData } from './components/AnalyticsNoData';

export const DetailedBalance = () => {
    const { outcomes, balance, categories, isLoading, isError } =
        useFetchBalance();
    return (
        <>
            {isLoading ? (
                <AnalyticsLoader />
            ) : isError ? (
                <AnalyticsError />
            ) : categories?.length === 0 ? (
                <AnalyticsNoData />
            ) : (
                <>
                    <CategoryChart
                        totalSpent={outcomes}
                        categories={categories}
                        balance={balance}
                    />
                    <CategoriesArray categories={categories} />
                </>
            )}
        </>
    );
};

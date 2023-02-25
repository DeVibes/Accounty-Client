import React from 'react';
import { YearlySumByMonthChart } from '../../modules/Analytics/YearlySumByMonthChart';
import { PrivateRouteHOC } from '../../modules/Router/components/PrivateRouteHOC';

export const Dashboard = () => {
    return (
        <PrivateRouteHOC>
            <YearlySumByMonthChart />
        </PrivateRouteHOC>
    );
};

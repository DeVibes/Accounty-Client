import React from 'react';
import { MonthlyCategoriesChart } from '../../modules/Analytics/MonthlyCategoryChart';
import { YearlySumByMonthChart } from '../../modules/Analytics/YearlySumByMonthChart';
import { PrivateRouteHOC } from '../../modules/Router/components/PrivateRouteHOC';

export const Dashboard = () => {
  return (
    <PrivateRouteHOC>
      <MonthlyCategoriesChart/>
      <YearlySumByMonthChart/>
    </PrivateRouteHOC>
  );
};

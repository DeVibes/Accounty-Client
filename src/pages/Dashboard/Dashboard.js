import React from 'react';
import { MonthlyCategoriesChart } from '../../modules/MonthlyCategoryChart';
import { PrivateRouteHOC } from '../../modules/Router/components/PrivateRouteHOC';

export const Dashboard = () => {
  return (
    <PrivateRouteHOC>
      <MonthlyCategoriesChart/>
    </PrivateRouteHOC>
  );
};

import React from 'react';

import DashboardCard from '@components/Dashboard/DashboardCard';
import SummaryTable from '@components/SummaryTable/SummaryTable';
import SummaryTableHeader from '@components/SummaryTable/SummaryTableHead';
import SummaryTableCell from '@components/SummaryTable/SummaryTableCell';
import { getSummarySales } from '@/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();
  // const data = await new Promise((res) => {
  //   setTimeout(() => {
  //     res(getSummarySales());
  //   }, 4000);
  // });

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}

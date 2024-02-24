import { getSummarySales } from '@/api';
import DashboardCard from '@components/Dashboard/DashboardCard';
import SummaryTable from '@components/SummaryTable/SummaryTable';
import SummaryTableCell from '@components/SummaryTable/SummaryTableCell';
import SummaryTableHeader from '@components/SummaryTable/SummaryTableHead';
import React from 'react';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();

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

import CompanyRow from '@components/Company/CompanyRow';
import CompanyTable from '@components/Company/CompanyTable';
import { Status } from '@components/StatusLabel/StatusLabel';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={Status.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}

import CompanyRow from '@components/CompanyRow/CompanyRow';
import CompanyTable from '@components/CompanyTable/CompanyTable';
import AddCompanyButton from '@components/Form/AddCompanyBtn';
import Header from '@components/Header/Header';
import SearchInput from '@components/SearchInput/SearchInput';
import { Status } from '@components/StatusLabel/StatusLabel';
import Toolbar from '@components/ToolBar/ToolBar';
import React, { FC } from 'react';

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="02.19.2023"
        />
      </CompanyTable>
    </>
  );
}

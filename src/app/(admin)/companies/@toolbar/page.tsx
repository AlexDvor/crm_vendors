import AddCompanyButton from '@components/Company/AddCompanyButton';
import SearchInput from '@components/SearchInput/SearchInput';
import Toolbar from '@components/ToolBar/ToolBar';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}

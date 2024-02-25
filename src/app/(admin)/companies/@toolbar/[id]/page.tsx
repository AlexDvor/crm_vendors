import React from 'react';
import AddPromotionButton from '@components/Promotion/AddPromotionButton'
import SearchInput from '@components/SearchInput/SearchInput'
import Toolbar from '@components/ToolBar/ToolBar'


export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}

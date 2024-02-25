'use client';

import CompanyForm from '@components/Form/CompanyForm';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm />
    </div>
  );
}

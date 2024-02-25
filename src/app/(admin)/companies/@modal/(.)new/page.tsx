'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@components/Company/CompanyFormModal';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return <CompanyFormModal show={true} onClose={() => router.back()} />;
}

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@components/Modal/Modal';
import CompanyForm from '@components/Form/CompanyForm';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}

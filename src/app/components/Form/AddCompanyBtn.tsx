'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@components/Button/Button';

export default function AddCompanyButton() {
  const router = useRouter();

  const handleClick = () => router.push('/companies/new');

  return <Button onClick={handleClick}>Add company</Button>;
}

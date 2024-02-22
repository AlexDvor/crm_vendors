'use client';

import { useState } from 'react';

import Button from '../Button/Button';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal show={show} onClose={() => setShow(false)} />
    </>
  );
}

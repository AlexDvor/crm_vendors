'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// import CompanyFormModal = dynamic(()=>)

import Button from '../Button/Button';
import CompanyFormModal from './CompanyFormModal';

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal show={show} onClose={() => setShow(false)} />
    </>
  );
}

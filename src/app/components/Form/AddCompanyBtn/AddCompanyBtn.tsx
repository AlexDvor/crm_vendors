'use client';

import React, { useState } from 'react';
import CompanyFormModal from '../CompanyFormModal/CompanyFormModal';

import Button from '../../Button/Button';

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal show={show} onClose={() => setShow(false)} />
    </>
  );
}

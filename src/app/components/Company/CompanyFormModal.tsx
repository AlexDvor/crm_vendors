'use client';

import CompanyForm from '@components/Form/CompanyForm';
import Modal, { ModalProps } from '@components/Modal/Modal';
import React from 'react';

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}

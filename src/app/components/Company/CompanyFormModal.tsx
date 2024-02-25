'use client';

import CompanyForm from '@components/Company/CompanyForm';
import Modal, { ModalProps } from '@components/Modal/Modal';

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}

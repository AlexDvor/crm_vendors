'use client';

import Header from '@components/Header/Header';
import { notFound } from 'next/navigation';

import React, { useEffect } from 'react';

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);

    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Companies({params.id}) </Header>
    </>
  );
}

import Sidebar from '@components/Sidebar/Sidebar';
import React, { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log('render');
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}

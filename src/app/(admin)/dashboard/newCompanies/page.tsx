import Header from '@components/Header/Header';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / New Companies</Header>
      <div>Some additional info</div>
    </>
  );
}

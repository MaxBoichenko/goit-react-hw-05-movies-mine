import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'components/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

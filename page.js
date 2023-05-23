import React from 'react';
import Layout from '../../app/layout';

const Page = ({ user, onLogout, children }) => {
  return (
    <Layout user={user} onLogout={onLogout}>
      {children}
    </Layout>
  );
};

export default Page;

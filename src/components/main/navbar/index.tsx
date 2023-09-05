import DashboardNavbar from '@/components/dashboard/main/navbar';
import React from 'react';
import DefaultNavbar from './navbar';
import { getServerSession } from 'next-auth';

const Navbar = async () => {
  const session = await getServerSession();
  return session === null ? <DefaultNavbar /> : <DashboardNavbar />;
};

export default Navbar;

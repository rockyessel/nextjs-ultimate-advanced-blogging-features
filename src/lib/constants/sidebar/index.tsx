import {
  BiLogOut,
  BiSolidComponent,
  BiSolidDashboard,
  BiSolidUser,
} from 'react-icons/bi';
import { SiPowerpages } from 'react-icons/si';

export const SidebarList = [
  { name: 'Dashboard', slug: '/dashboard', icon: <BiSolidDashboard /> },
  { name: 'Blog', slug: '/dashboard/blog', icon: <BiSolidComponent /> },
  { name: 'Stories', slug: '/dashboard/stories', icon: <SiPowerpages /> },
  { name: 'Profile', slug: '/dashboard/profile', icon: <BiSolidUser /> },
];

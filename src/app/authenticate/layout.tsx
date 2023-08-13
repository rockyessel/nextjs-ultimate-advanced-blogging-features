import Navbar from '@/components/navbar';
import '@/styles/global.css';
import { LayoutRootProps } from '@/interface';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bloggie | Authentication',
  description: 'Join us now',
};

export default function RootLayout(props: LayoutRootProps) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{props.children}</main>
      </body>
    </html>
  );
}

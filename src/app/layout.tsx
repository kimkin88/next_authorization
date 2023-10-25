import '../styles/geeks/theme.scss';
import '@/styles/reset.scss';

import cn from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { getServerSession } from 'next-auth/next';
import { ReactNode } from 'react';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import ClientCookiesProvider from '@/providers/ClientCookiesProvider';
import SessionProvider from '@/providers/SessionProvider';

import { authOptions } from './api/auth/[...nextauth]/route';
import style from './styles.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'match-minds',
  description: 'match-minds',
};

interface Props {
  children: ReactNode;
}

export default async function RootLayout({ children }: Props): Promise<JSX.Element> {
  const cookiesStore = cookies();
  const session = await getServerSession(authOptions);

  return (
    <ClientCookiesProvider value={cookiesStore.getAll()}>
      <html lang="en">
        <body className={cn(inter.className, style.layout)}>
          <SessionProvider session={session}>
            <Header />
            <main>{children}</main>
            <Footer />
          </SessionProvider>
        </body>
      </html>
    </ClientCookiesProvider>
  );
}

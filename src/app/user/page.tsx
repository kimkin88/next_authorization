'use client';

import { useSession } from 'next-auth/react';
import { FC } from 'react';

import { Title } from '@/components/ui';

import s from './styles.module.scss';

const User: FC = () => {
  const { data: session } = useSession();
  const customSession = { ...session } as { email: string } | null;

  return (
    <div className={s.wrapper}>
      {session ? (
        <>
          <Title name="h1">
            <span>User</span> logged in
          </Title>
          <Title name="h2">
            <span>{customSession?.email}</span>
          </Title>
        </>
      ) : (
        <Title name="h1">
          <span>User</span> logged out
        </Title>
      )}
    </div>
  );
};

export default User;

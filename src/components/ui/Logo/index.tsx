import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import ROUTES from '@/constants/routes';

import s from './styles.module.scss';

export const Logo: FC = () => {
  const router = useRouter();
  return (
    <div className={s.logo} onClick={() => router.push(ROUTES.DEFAULT)}>
      <Image src="/images/pages/logo.svg" alt="logo" fill priority />
    </div>
  );
};

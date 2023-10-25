import { ReactNode } from 'react';

import s from './layout.module.scss';

export default async function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className={s.authLayoutWrapper}>
      <div className={s.mask} />
      <div>{children}</div>
    </div>
  );
}

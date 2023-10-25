import Image from 'next/image';
import { FC } from 'react';

import { SEPARATOR_DOT } from '@/constants';

import s from './styles.module.scss';

const PersonCard: FC = () => {
  return (
    <div className={s.card}>
      <div className={s.avatar}>
        <Image
          src={'/images/pages/candidate/img.png'}
          alt={'avatar'}
          width={150}
          height={150}
        />
      </div>
      <p className={s.name}>John Galt</p>
      <ul className={s.descJob}>
        <li>Frontend developer</li>
        <li>Middle</li>
      </ul>
      <p className={s.salaryAndStatus}>From $2000 {SEPARATOR_DOT} Looking for a job</p>
    </div>
  );
};

export default PersonCard;

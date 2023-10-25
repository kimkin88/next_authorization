import { FC } from 'react';

import s from './styles.module.scss';

const PersonalInfo: FC = () => {
  return (
    <div className={s.card}>
      <div className={s.info}>
        <p className={s.text}>
          <span>Age:</span> 22 years
        </p>
        <p className={s.text}>
          <span>Work experience:</span> 2 years and 6 months
        </p>
      </div>
      <p className={s.text}>
        <span>Location:</span> Minsk, Belarus
      </p>
      <p className={s.text}>
        <span>Additionally:</span> ready to move and work remotely
      </p>
      <p className={s.text}>
        <span>Professional skills</span> Git • Docker • RabbitMQ • MongoDB • React •
        Vue.js • Nuxt.js • Next.js • TypeScript • JavaScript
      </p>
      <div className={s.socialNetworks}>
        <p className={s.text}>
          <span>Telegram:</span> @testuser
        </p>
        <p className={s.text}>
          <span>Email</span> test@gmail.com
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;

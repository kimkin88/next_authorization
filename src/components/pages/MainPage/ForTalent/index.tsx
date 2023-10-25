import Link from 'next/link';
import { FC } from 'react';
import { Container } from 'react-bootstrap';

import ROUTES from '@/constants/routes';

import s from './styles.module.scss';
const pcImg = '/images/pages/main/for-talent/pc.webp';

const CARDS = [
  'Find opportunities for every stage of your freelance career',
  'Control when, where, and how you work',
  'Explore different ways to earn',
];

const ForTalent: FC = () => {
  return (
    <section>
      <Container className={s.container}>
        <div className={s.wrapper}>
          <div className={s.photo}>
            <img src={pcImg} alt="For talent" />
          </div>
          <div className={s.content}>
            <div className={s.textBlock}>
              <p className={s.subtitle}>For talent</p>
              <h2 className={s.title}>
                Find great <br /> work
              </h2>
              <p className={s.text}>
                Meet clients you’re excited to work with and take <br /> your career or
                business to new heights.
              </p>
            </div>
            <div className={s.bottom}>
              <hr />
              <div className={s.cards}>
                {CARDS.map((card) => (
                  <div className={s.card} key={card}>
                    {card}
                  </div>
                ))}
              </div>
              <Link href={ROUTES.AUTH.LOGIN} className={s.link}>
                Find opportunities
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ForTalent;

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

import ROUTES from '@/constants/routes';

import s from './styles.module.scss';

const ForClients: FC = () => {
  const router = useRouter();

  return (
    <section className={s.section}>
      <Container className={s.container}>
        <div className={s.wrapper}>
          <h3 className={s.subtitle}>For clients</h3>
          <div className={s.textBlock}>
            <h2 className={s.title}>
              Find talent <br />
              your way
            </h2>
            <p className={s.text}>
              Work with the largest network of independent professionals and get things
              done—from quick turnarounds to big transformations.
            </p>
          </div>
          <div className={s.cards}>
            <div className={s.card} onClick={() => router.push(ROUTES.AUTH.LOGIN)}>
              <h3 className={s.cardTitle}>
                Post a job <br />
                and hire a pro
              </h3>
              <p className={s.cardSubtitle}>
                Talent Marketplace <ArrowRight />
              </p>
            </div>
            <div className={s.card} onClick={() => router.push(ROUTES.AUTH.LOGIN)}>
              <h3 className={s.cardTitle}>
                Browse and <br />
                buy projects
              </h3>
              <p className={s.cardSubtitle}>
                Project Catalog <ArrowRight />
              </p>
            </div>
            <div className={s.card} onClick={() => router.push(ROUTES.AUTH.LOGIN)}>
              <h3 className={s.cardTitle}>
                Get advice from <br />
                an industry expert
              </h3>
              <p className={s.cardSubtitle}>
                Consultations <ArrowRight />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ForClients;

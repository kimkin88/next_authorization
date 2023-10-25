import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Button, Container } from 'react-bootstrap';

import ROUTES from '@/constants/routes';

import s from './styles.module.scss';

const JoinToday: FC = () => {
  const router = useRouter();

  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>Join Today</h2>
        <p className={s.subtitle}>
          Discover the career opportunities waiting for you at MatchMinds. Sign up now and
          unlock the potential of our platform.
        </p>
        <div className={s.buttonBlock}>
          <Button variant="light" onClick={() => router.push(ROUTES.AUTH.REGISTRATION)}>
            Register
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default JoinToday;

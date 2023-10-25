import { FC } from 'react';
import { Container } from 'react-bootstrap';

import s from './styles.module.scss';

const Banner: FC = () => {
  return (
    <section>
      <Container>
        <div className={s.banner}>
          <h1 className={s.title}>Revolutionize your job search with MatchMinds.</h1>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

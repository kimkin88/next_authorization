import { FC } from 'react';
import { Container } from 'react-bootstrap';

import s from './styles.module.scss';

const CARDS = [
  {
    title: 'Fast Matching',
    subtitle: 'Enhance your job search experience with our powerful algorithms.',
  },
  {
    title: 'User-Friendly',
    subtitle: 'Navigate effortlessly through our website without any hassle.',
  },
  {
    title: 'Personalized Profiles',
    subtitle: 'Job-seekers and employers get profiles tailored to their needs.',
  },
  {
    title: 'Advanced Filters',
    subtitle: 'Find your dream job or perfect candidate easily with our filters.',
  },
  {
    title: 'Expert Guidance',
    subtitle: 'Our career experts offer valuable advice to elevate your career.',
  },
  {
    title: 'Power of Connection',
    subtitle: 'Network with professionals to expand your opportunities.',
  },
];

const ExploreUs: FC = () => {
  return (
    <section>
      <Container className={s.container}>
        <h2 className={s.title}>Explore Our Features</h2>
        <div className={s.list}>
          {CARDS.map((card) => (
            <div className={s.card} key={card.title}>
              <h3 className={s.cardTitle}>{card.title}</h3>
              <p className={s.cardSubtitle}>{card.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExploreUs;

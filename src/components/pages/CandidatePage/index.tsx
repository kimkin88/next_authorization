'use client';
import { FC } from 'react';
import { Container } from 'react-bootstrap';

import AboutMe from '@/components/pages/CandidatePage/AboutMe';
import Experience from '@/components/pages/CandidatePage/Experience';
import PersonalInfo from '@/components/pages/CandidatePage/PersonalInfo';
import PersonCard from '@/components/pages/CandidatePage/PersonCard';

import s from './styles.module.scss';

const CandidatePage: FC = () => {
  return (
    <Container className={s.container}>
      <div className={s.left}>
        <PersonCard />
        <PersonalInfo />
      </div>
      <div className={s.right}>
        <AboutMe />
        <Experience />
      </div>
    </Container>
  );
};

export default CandidatePage;

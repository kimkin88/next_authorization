import { FC } from 'react';

import s from './styles.module.scss';

const AboutMe: FC = () => {
  return (
    <div className={s.card}>
      <h2 className={s.title}>About me</h2>
      <div>
        Here will be HTML from text editor
        <br />
        <br />I am a proficient full-stack developer with expertise in building
        single-page applications (SPAs) both with and without server-side rendering (SSR)
        using popular technologies such as React, Vue, Next.js, Nuxt.js, Node.js, Express,
        Docker, and web components.
      </div>
    </div>
  );
};

export default AboutMe;

import { FC } from 'react';

import { SEPARATOR_DOT } from '@/constants';

import s from './styles.module.scss';

const COMPANIES = [
  {
    companyName: 'Test Technologies',
    companyAdditionalInfo: 'From 10 to 100 employees',
    candidatePosition: 'Frontend developer',
    workDuration: 'May 2023 - Present (5 months)',
    htmlDescriptionWork:
      "I'm responsible for developing the client side of the streaming service. And work on internal product.\n" +
      '\n' +
      'Team size: 2 front-end developers, 2 back-end developers, PM, mobile developer, DevOps, UX/UI designer\n' +
      '\n' +
      'Language communication for the project - English\n' +
      '\n' +
      'Project location - USA\n' +
      '\n' +
      'Skills: React, Typescript, Vue, Redux, Docker',
    technologies: [
      'Docker',
      'React',
      'JavaScript',
      'Redux',
      'SCSS',
      'TypeScript',
      'Vue.js',
      'WebSockets',
      'WebRTC',
    ],
  },
];

const Experience: FC = () => {
  return (
    <div className={s.block}>
      <h2 className={s.title}>Experience</h2>
      <div className={s.content}>
        {COMPANIES.map((company, index) => (
          <div key={index}>
            <div className={s.companyInfo}>
              <h3>{company.companyName}</h3>
              <p>{company.companyAdditionalInfo}</p>
            </div>
            <div className={s.workInfo}>
              <p className={s.candidatePosition}>{company.candidatePosition}</p>
              <p className={s.workDuration}>{company.workDuration}</p>
            </div>
            <div className={s.description}>
              <h4>here will be html text from editor</h4>
              {company.htmlDescriptionWork}
            </div>
            <div className={s.technologies}>
              {company.technologies.map((technology, index) => (
                <div key={technology} className={s.technology}>
                  <p>{technology}</p>
                  {index !== company.technologies.length - 1 && (
                    <span className={s.dot}>{SEPARATOR_DOT}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

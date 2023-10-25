'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import SectionLabel from '@/components/pages/HomePage/common/SectionLabel';
import { Title } from '@/components/ui';
import ROUTES from '@/constants/routes';

import Folder from './Folder';
import s from './styles.module.scss';

type ContentItem = {
  whiteText: string;
  orandeText: string;
  description: string;
  bottonText: string;
};
type TextItem = { tip: string; headerTextWhite: string; headerTextPurple: string };
interface Props {
  content: ContentItem[];
  text: TextItem | null;
}

const Matchminds: FC<Props> = ({ text, content }) => {
  const { push } = useRouter();

  return (
    <AnimatedSection>
      <div className={s.wrapper}>
        <div className={s.matchminds}>
          <div className={s.textBlock}>
            <SectionLabel>{text?.tip}</SectionLabel>
            <Title name="h1">
              {text?.headerTextWhite} <span>{text?.headerTextPurple}</span>
            </Title>
          </div>
          <div className={s.folderBlock}>
            {content.map(({ whiteText, orandeText, description, bottonText }, idx) => (
              <Folder
                key={`folder-${idx}`}
                whiteText={whiteText}
                orangeText={orandeText}
                description={description}
                buttonText={bottonText}
                onClick={() => {
                  push(
                    `${ROUTES.AUTH.REGISTRATION}?role=${
                      idx === 0 ? 'candidate' : 'company'
                    }`,
                  );
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Matchminds;

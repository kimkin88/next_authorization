import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import SectionLabel from '@/components/pages/HomePage/common/SectionLabel';
import { Title } from '@/components/ui';

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
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Matchminds;

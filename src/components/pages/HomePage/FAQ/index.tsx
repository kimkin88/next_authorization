import Image from 'next/image';
import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { Accordion, Title } from '@/components/ui';

import s from './styles.module.scss';

type ContentItem = { question: string; answer: string };
type TextItem = { whiteTitle: string; purpleTitle: string };
interface Props {
  content: ContentItem[];
  text: TextItem;
}

const FAQ: FC<Props> = ({ text, content }) => {
  return (
    <AnimatedSection>
      <div className={s.faq}>
        <div className={s.content}>
          <div className={s.textBlock}>
            <Title name="h1">
              {text.whiteTitle} <span>{text.purpleTitle}</span>
            </Title>
            <div className={s.accordionContent}>
              {content?.map(({ answer, question }, idx) => (
                <Accordion key={`accordion-${idx}`} answer={answer} question={question} />
              ))}
            </div>
          </div>
          <figure className={s.imageContent}>
            <Image src="/images/pages/home/faq/globe.png" alt="hands" fill />
          </figure>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQ;

'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { Button, Title } from '@/components/ui';
import ROUTES from '@/constants/routes';

import s from './styles.module.scss';

type TextItem = {
  whiteTitle: string;
  purpleTitle: string;
  text: string;
  bottonText: string;
};
interface Props {
  text: TextItem;
}

const FindToday: FC<Props> = ({ text }) => {
  const { push } = useRouter();
  return (
    <AnimatedSection>
      <div className={s.findToday}>
        <div className={s.contentWrapper}>
          <Title name="purpleH2">
            {text.whiteTitle} <span>{text.purpleTitle}</span>
          </Title>
          <div className={s.content}>
            <p>{text.text}</p>
            <Button
              styleType="bg"
              onClick={() => {
                push(`${ROUTES.AUTH.REGISTRATION}?role=candidate`);
              }}
            >
              {text.bottonText}
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FindToday;

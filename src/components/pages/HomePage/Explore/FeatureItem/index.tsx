import Image from 'next/image';
import { FC } from 'react';

import s from './styles.module.scss';

interface Props {
  title: string;
  text: string;
  imageSrc: string;
}

const FeatureItem: FC<Props> = ({ title, text, imageSrc }) => {
  return (
    <div className={s.featureItem}>
      <figure className={s.imageContainer}>
        <Image src={imageSrc} alt={title} fill sizes="100%" />
      </figure>
      <div className={s.textBlock}>
        <p className={s.title}>{title}</p>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  );
};

export default FeatureItem;

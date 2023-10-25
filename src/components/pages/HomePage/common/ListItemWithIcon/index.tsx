import Image from 'next/image';
import { FC } from 'react';

import s from './styles.module.scss';

interface Props {
  title: string;
  text: string;
  imageSrc: string;
}

const ListItemWithIcon: FC<Props> = ({ imageSrc, text, title }) => {
  return (
    <div className={s.item}>
      <Image src={imageSrc} alt={title} width={32} height={32} />
      <div className={s.textContainer}>
        <p className={s.title}>{title}</p>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  );
};

export default ListItemWithIcon;

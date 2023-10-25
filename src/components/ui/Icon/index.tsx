import { FC } from 'react';

import Arrow from '../../../../public/images/svg/arrow.svg';
import MainBanner from '../../../../public/images/svg/banner.svg';
import Burger from '../../../../public/images/svg/burger.svg';
import Cross from '../../../../public/images/svg/cross.svg';
import LangArrow from '../../../../public/images/svg/lang_arrow.svg';

interface IconProps {
  name: keyof typeof components;
  className?: string;
  onClick?: () => void;
}

const components = {
  mainBanner: (className?: string, onClick?: () => void) => (
    <MainBanner className={className} onClick={onClick} />
  ),
  burger: (className?: string, onClick?: () => void) => (
    <Burger className={className} onClick={onClick} />
  ),
  cross: (className?: string, onClick?: () => void) => (
    <Cross className={className} onClick={onClick} />
  ),
  arrow: (className?: string, onClick?: () => void) => (
    <Arrow className={className} onClick={onClick} />
  ),
  langArrow: (className?: string, onClick?: () => void) => (
    <LangArrow className={className} onClick={onClick} />
  ),
};

const Icon: FC<IconProps> = ({ className, name, onClick }) => {
  return components[name](className, onClick);
};

export default Icon;

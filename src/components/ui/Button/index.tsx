import cn from 'classnames';
import { PropsWithChildren } from 'react';

import s from './styles.module.scss';

type ButtonTheme = 'clear' | 'outline' | 'bg';

interface Props {
  styleType?: ButtonTheme;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  styleType = '',
  ...props
}) => (
  <button className={cn(s.simpleButton, s[styleType])} {...props} onClick={onClick}>
    {children}
  </button>
);

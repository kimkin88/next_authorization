import cn from 'classnames';
import { PropsWithChildren } from 'react';

import s from './styles.module.scss';

type ButtonTheme = 'clear' | 'outline' | 'bg';

interface Props {
  styleType?: ButtonTheme;
  disabled?: boolean;
  type?: 'submit' | 'button';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  type = 'button',
  styleType = '',
  className,
  ...props
}) => (
  <button
    className={cn(s.simpleButton, s[styleType], className)}
    type={type}
    {...props}
    onClick={onClick}
  >
    {children}
  </button>
);

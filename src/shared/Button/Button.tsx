import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import css from './Button.module.scss';

type ButtonProps = {
  className: string;
  color?: 'primary';
  disabled?: boolean;
  size?: 's' | 'm' | 'fullW';
} & PropsWithChildren;

const Button = ({
  children,
  className,
  size = 'm',
  disabled = false,
  color = 'primary',
}: ButtonProps) => {
  const cxBtn = classNames(
    css.btn,
    css[size],
    css[color],
    className && className
  );

  return (
    <button className={cxBtn} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;

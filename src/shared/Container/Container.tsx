import css from './Container.module.scss';

import { PropsWithChildren } from 'react';

type ContainerT = PropsWithChildren;

const Cont = ({ children }: ContainerT) => {
  return <div className={css.container}>{children}</div>;
};

export default Cont;

import { lists } from '../../../config/config';

import FooterCycleList from '../FooterCycleList';

import css from './FooterNav.module.scss';

const FooterNav = () => {
  return (
    <nav className={css.categories}>
      <FooterCycleList list={lists} />
    </nav>
  );
};

export default FooterNav;

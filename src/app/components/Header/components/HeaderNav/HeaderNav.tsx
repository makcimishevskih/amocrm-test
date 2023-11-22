import css from './HeaderNav.module.scss';

import { labels } from '../../../config/config';

const HeaderNavList = () => {
  return (
    <nav className={css.nav}>
      <ol className={css.nav__list}>
        {labels.map((label) => (
          <li key={label} className={css.nav__item}>
            <a className={css.nav__link} href="#services">
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default HeaderNavList;

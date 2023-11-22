import logo from '../../../../../assets/logo/logo-welbex.svg';

import css from './HeaderLogo.module.scss';

const HeaderLogo = () => {
  return (
    <figure className={css.logo__wrapper}>
      <a href="/">
        <img className={css.logo__img} src={logo} alt="logo" />
      </a>
      <figcaption className={css.logo__text}>
        крупный интегратор CRM в Росcии и ещё 8 странах
      </figcaption>
    </figure>
  );
};
export default HeaderLogo;

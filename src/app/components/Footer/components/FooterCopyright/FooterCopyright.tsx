import css from './FooterCopyright.module.scss';

const FooterCopyright = () => {
  return (
    <footer className={css.footer__policy}>
      <p className={css.laws}>&copy;WELBEX 2022. Все права защищены.</p>
      <p className={css.policy}>
        <a href="#policy">Политика конфиденциальности</a>
      </p>
    </footer>
  );
};
export default FooterCopyright;

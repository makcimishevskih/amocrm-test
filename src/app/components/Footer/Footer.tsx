import css from './Footer.module.scss';

import FooterCopyright from './components/FooterCopyright';
import FooterNav from './components/FooterNav';

const Footer = () => {
  return (
    <section className={css.footer}>
      <FooterNav />
      <FooterCopyright />
    </section>
  );
};
export default Footer;

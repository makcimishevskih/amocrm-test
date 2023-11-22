import css from './Header.module.scss';

import HeaderNav from './components/HeaderNav';
import HeaderLogo from './components/HeaderLogo';
import ContactList from './components/ContactList/ContactList';

const Header = () => {
  return (
    <section className={css.header}>
      <HeaderLogo />
      <HeaderNav />
      <ContactList />
    </section>
  );
};

export default Header;

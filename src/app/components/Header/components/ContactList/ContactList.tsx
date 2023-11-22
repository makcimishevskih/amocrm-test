import css from './ContactList.module.scss';

import { messengers } from '../../../config/config';

const ContactList = () => {
  return (
    <div className={css.contacts}>
      <div className={css.contacts__phone}>
        <a href="tel:7-555-555-55-55">+7 555 555-55-55</a>
      </div>
      <ol className={css.contacts__list}>
        {messengers.map((el) => (
          <li key={el.name} className={css.contacts__item}>
            <a className={css.contacts__link} href={el.href}>
              <img src={el.img} alt={`contacts-${el.name}`} />
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default ContactList;

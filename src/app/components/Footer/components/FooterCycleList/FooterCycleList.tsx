import classNames from 'classnames';

import { ListDataT } from '../../../config/config';

import css from './FooterCycleList.module.scss';

type ListProps = {
  list: ListDataT[];
};

// can be recursive, if refactor list-data
const FooterCycleList = ({ list }: ListProps) => {
  const cxContacts = classNames(css.contacts__list);

  const cxTitle = classNames(
    css.categories__title,
    css.categories__title_upper
  );

  return (
    <ol className={css.categories__list}>
      {list.map((el) => (
        <li key={el.name} className={css.categories__item}>
          <span
            className={el.name === 'Контакты' ? css.categories__title : cxTitle}
          >
            {el.name}
          </span>

          <ul
            className={
              el.name === 'Контакты' ? cxContacts : css.categories__innerlist
            }
          >
            {el.children.map((el2) => (
              <li key={el2.name} className={css.categories__inneritem}>
                <a className={css.categories__innerlink} href={el2.href}>
                  {el2.img ? (
                    <img src={el2.img} alt={`contacts-${el.name}`} />
                  ) : (
                    el2.name
                  )}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

export default FooterCycleList;

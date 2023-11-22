import { contentItems } from '../../../config/config';
import css from './AdvantagesList.module.scss';

const AdvantagesList = () => {
  return (
    <ul className={css.advantages__list}>
      {contentItems.map((el) => (
        <li key={el.title} className={css.advantages__item}>
          <h3 className={css.advantages__title}>
            <span>{el.title}</span>
          </h3>
          <p className={css.advantages__text}>{el.text}</p>
        </li>
      ))}
    </ul>
  );
};
export default AdvantagesList;

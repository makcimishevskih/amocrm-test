import css from './Advantages.module.scss';

import classNames from 'classnames';

import AdvantagesList from '../AdvantagesList';
import Button from '../../../../../shared/Button';

const Advantages = () => {
  const cxSellerText = classNames(css.seller__text, 'gradient');

  return (
    <div className={css.advantages}>
      <p className={css.advantages__seller}>
        Вместе с <span className={cxSellerText}>бесплатной</span>
        <br /> <span className={cxSellerText}>консультацией</span> мы дарим:
      </p>
      <AdvantagesList />
      <Button className={css.advantages__btn} size="m">
        Получить консультацию
      </Button>
    </div>
  );
};
export default Advantages;

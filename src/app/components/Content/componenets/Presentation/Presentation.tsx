import classNames from 'classnames';
import css from './Presentation.module.scss';

const Presentation = () => {
  const cxTitle = classNames(css.presentation__title, 'gradient');

  return (
    <div className={css.presentation}>
      <p className={css.presentation__text}>Зарабатывайте больше</p>
      <h1 className={cxTitle}>с WELBEX</h1>
      <p className={css.presentation__subtext}>
        Развиваем и контролируем продажи для вас
      </p>
    </div>
  );
};
export default Presentation;

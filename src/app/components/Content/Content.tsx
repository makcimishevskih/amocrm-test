import css from './Content.module.scss';

import Advantages from './componenets/Advantages';
import Presentation from './componenets/Presentation';
import Container from '../../../shared/Container';

const Content = () => {
  return (
    <main className={css.content__bg}>
      <Container>
        <section className={css.content}>
          <Presentation />
          <Advantages />
        </section>
      </Container>
    </main>
  );
};
export default Content;

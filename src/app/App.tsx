import css from './App.module.scss';

import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from '../shared/Container';

function App() {
  return (
    <div className={css.app}>
      <div className={css.bg}>
        <Container>
          <Header />
        </Container>
        <Content />
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}

export default App;

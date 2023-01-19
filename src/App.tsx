import { Container, ContentSection } from './app.stitches';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useChangeWidth } from './hooks/contentState';

import { BsArrowBarLeft } from 'react-icons/bs';

export default function App() {
  const { changeWidth, contentState } = useChangeWidth();

  return (
    <Container>
      <Header />

      <ContentSection variant={ contentState === 'max' ? 'max' : 'min' }>
        <Sidebar />
        <Content />
        <button onClick={ changeWidth }>
          <BsArrowBarLeft />
          <p>Collaose</p>
        </button>
      </ContentSection>
    </Container>
  );
}

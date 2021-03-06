import styled from 'styled-components';
import Navbar from './Navbar';
import Routes from './Routes';

function App() {
  return (
    <Container>
      <header>
        <Navbar />
      </header>
      <Main>
        <Routes />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export default App;

import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';

function App() {
  const location = useLocation();

  return (
    <Container>
      {(location.pathname === '/login' || location.pathname === '/signup')
        ? null : (
          <header>
            <Navbar />
          </header>
        )}
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
  position: relative;
`;

export default App;

import { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import useOnClickOutside from '../hooks';
import Routes from './Routes';
import theme from '../theme';
import Burger from './Burger';
import Menu from './Menu';

function App() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {(location.pathname === '/login' || location.pathname === '/signup')
          ? null : (
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>
          )}
        <Main>
          <Routes />
        </Main>
      </Container>
    </ThemeProvider>
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

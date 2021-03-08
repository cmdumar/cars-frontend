import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import fetchCars from '../actions/carsActions';
import Navbar from './Navbar';
import Routes from './Routes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  });

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
  position: relative;
`;

export default connect()(App);

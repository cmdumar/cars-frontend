import styled from 'styled-components';
import bg from '../assets/home-min.jpg';

function Home() {
  return (
    <Section>
      <Bg />
      <Title>Tesla Motors</Title>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  color: white;
  font-size: 50px;
  z-index: 1000;
`;

export default Home;

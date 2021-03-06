import styled from 'styled-components';
import bg from '../assets/home.jpg';

function Home() {
  return (
    <Section>
      <h1>Home</h1>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
`;

export default Home;

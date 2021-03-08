import styled from 'styled-components';

function Models() {
  return (
    <Container>
      <Header>
        <Title>LATEST MODELS</Title>
        <p>Please select a Tesla Model</p>
        <DottedLine />
      </Header>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  place-items: center;
  height: 100%;
`;

const Header = styled.section`
  text-align: center;
  p {
    color: rgb(183 183 183);
    font-size: 15px;
    font-weight: bold;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DottedLine = styled.div`
  width: 100px;
  height: 1px;
  margin: 0 auto;
  padding-top: 30px;
  border-bottom: 3px dotted #ccc;
`;

export default Models;

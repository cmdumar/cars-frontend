import styled from 'styled-components';

function Signup() {
  return (
    <Container>
      <Content>
        <h2>Signup to Tesla</h2>
        <Form>
          <input name="name" type="text" placeholder="Your Name" />
          <input name="email" type="email" placeholder="Your Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="button">Sign up</button>
        </Form>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: linear-gradient(to right, #22c1c3, #fdbb2d);
`;

const Content = styled.div`
  width: 400px;
  height: auto;
  padding: 20px 30px;
  padding-bottom: 30px;
  background-color: #fff;
  border-radius: 5px;

  h2 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    font-size: 18px;
  }

  button {
    width: 100%;
    background: #2364d2;
    border: none;
    padding: 10px 5px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    font-family: "Source Sans Pro", sans-serif;
    box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export default Signup;

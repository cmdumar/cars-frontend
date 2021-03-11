import { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  bool, func, string,
} from 'prop-types';
import { signup } from '../actions/userActions';

function Signup({
  setToken, signup, loading, error,
}) {
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleChange = e => {
    const { value } = e.target;

    setUserInput({ ...userInput, [e.target.name]: value });
  };

  const handleClick = () => {
    if (userInput.name.length !== 0
      && userInput.email.length !== 0
      && userInput.password.length !== 0) {
      signup(userInput).then(res => {
        if (res.token) {
          setToken(res.token);
          history.push('/');
        }
      });
    }
  };

  let toRender;

  if (loading) {
    toRender = <p>Loading</p>;
  }

  if (!loading && error !== null) {
    toRender = (
      <p>
        Could not login because of Error:
        {error}
      </p>
    );
  }

  return (
    <Container>
      <Content>
        <h2>Signup to Tesla</h2>
        <Form>
          <input name="name" type="text" onChange={handleChange} placeholder="Your Name" />
          <input name="email" type="email" onChange={handleChange} placeholder="Your Email" />
          <input name="password" type="password" onChange={handleChange} placeholder="Password" />
          <button type="button" onClick={handleClick}>Sign up</button>
        </Form>
        {toRender}
        <p>Already have an account?</p>
        <StyledLink to="/login">Login</StyledLink>
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

  p {
    margin-top: 20px;
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

const StyledLink = styled(Link)`

`;

Signup.propTypes = {
  setToken: func.isRequired,
  signup: func.isRequired,
  loading: bool.isRequired,
  error: string,
};

Signup.defaultProps = {
  error: null,
};

const mapStateToProps = ({ userData }) => ({
  user: userData.user,
  loading: userData.loading,
  error: userData.error,
});

export default connect(mapStateToProps, { signup })(Signup);

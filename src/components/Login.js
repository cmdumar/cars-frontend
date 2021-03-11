import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  bool, func, instanceOf, string,
} from 'prop-types';
import { connect } from 'react-redux';
import login from '../actions/userActions';

function Login({
  setToken, login, user, loading, error,
}) {
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const history = useHistory();

  useEffect(() => {
    if (user.token) {
      setToken(user.token);
      history.push('/');
    }
  }, [user, loading, error]);

  const handleChange = e => {
    const { value } = e.target;

    setUserInput({ ...userInput, [e.target.name]: value });
  };

  const handleClick = () => {
    if (userInput.email.length !== 0 && userInput.password.length !== 0) login(userInput);
  };

  let toRender;

  if (loading) {
    toRender = <div>Loading</div>;
  }

  if (!loading && error !== null) {
    toRender = (
      <div>
        Could not login because of Error:
        {error}
      </div>
    );
  }

  return (
    <Container>
      <Content>
        <h2>Login to Tesla</h2>
        <Form>
          <input onChange={handleChange} name="email" type="email" placeholder="Email" required />
          <input onChange={handleChange} name="password" type="password" placeholder="Password" required />
          <Button type="button" onClick={handleClick}>Login</Button>
        </Form>
        {toRender}
        <p>{'Don\'t have an account?'}</p>
        <StyledLink to="/signup">Sign up</StyledLink>
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
`;

const Button = styled.button`
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
`;

const StyledLink = styled(Link)`


`;

Login.propTypes = {
  setToken: func.isRequired,
  login: func.isRequired,
  user: instanceOf(Object).isRequired,
  loading: bool.isRequired,
  error: string,
};

Login.defaultProps = {
  error: null,
};

const mapStateToProps = ({ userData }) => ({
  user: userData.user,
  loading: userData.loading,
  error: userData.error,
});

export default connect(mapStateToProps, { login })(Login);

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import logo from '../assets/logo.svg';

function Navbar() {
  const history = useHistory();
  const handleClick = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <Nav>
      <List>
        <LogoItem>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
        </LogoItem>
        <Item>
          <Page to="/models">
            Models
          </Page>
        </Item>
        <Item>
          <Page to="/">
            Shop
          </Page>
        </Item>
        <Item>
          <Page to="/profile">
            Profile
          </Page>
        </Item>
        <Button type="button" onClick={handleClick}>Sign out</Button>
      </List>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 15rem;
  height: 100%;
  box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const LogoItem = styled.li`
  position: absolute;
  top: 0;
`;

const Item = styled.li`
  width: 100%;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const Page = styled(Link)`
  display: inline-block;
  width: 100%;
  text-decoration: none;
  padding: 10px 0;
  padding-left: 10px;
  margin-left: 15px;
  font-size: 30px;
  font-weight: bold;
  color: black;
  &:hover {
    background-color: #97bf0e;
    color: white;
  }
`;

const Button = styled.button`
  background: #2364d2;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
`;

export default Navbar;

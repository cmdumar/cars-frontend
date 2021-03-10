import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Navbar() {
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

export default Navbar;

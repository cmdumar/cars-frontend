import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  width: 250px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export default StyledMenu;

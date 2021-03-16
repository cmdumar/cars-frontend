import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const color = getRandomColor();

function Car({ cars }) {
  return (
    <StyledCarousel itemsToShow={3}>
      {cars.map(i => (
        <StyledLink key={i.model} to={`models/${i.id}`}>
          <CarItem>
            <ImgContainer>
              <Circle />
              <img src={i.logo} alt="Car" />
            </ImgContainer>
            <TextContainer>
              <h2>{i.model}</h2>
            </TextContainer>
          </CarItem>
        </StyledLink>
      ))}
    </StyledCarousel>
  );
}

const StyledCarousel = styled(Carousel)`
  width: 100%;
  padding: 10px;
  .rec-arrow {
    background-color: rgba(0,0,0,.5);
    color: white;
    font-size: 1.1em;
    &:hover {
      background-color: rgba(0,0,0,.8);
    }
  }
  .rec-pagination {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`;

const CarItem = styled.div``;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 500px;
    z-index: 5;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: ${color};
  border-radius: 50%;
  z-index: -1;
`;

const TextContainer = styled.div`
  text-align: center;
`;

Car.propTypes = {
  cars: PropTypes.instanceOf(Array).isRequired,
};

export default Car;

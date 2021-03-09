/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import Carousel from 'react-elastic-carousel';
import fetchCars from '../actions/carsActions';

function Models({
  cars, loading, error, fetchCars,
}) {
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <Title>LATEST MODELS</Title>
          <p>Please select a Tesla Model</p>
          <DottedLine />
        </Header>
        {loading ? <div>Loading</div>
          : (
            <StyledCarousel itemsToShow={3}>
              {cars.map(i => (
                <Car key={i.model}>
                  <ImgContainer>
                    <img src={i.picture[0].img} alt="Car" />
                  </ImgContainer>
                  <TextContainer>
                    <h2>{i.model}</h2>
                  </TextContainer>
                </Car>
              ))}
            </StyledCarousel>
          )}
      </Content>
    </Container>
  );
}

const Car = styled.div``;

const ImgContainer = styled.div`
  img {
    width: 500px;
  }
`;

const TextContainer = styled.div`
  text-align: center;
`;

const Container = styled.section`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
`;

const Header = styled.section`
  text-align: center;
  p {
    color: rgb(183 183 183);
    font-size: 15px;
    font-weight: bold;
  }
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  padding: 10px;
  .rec-arrow {
    background-color: rgba(0,0,0,.5);
    color: white;
    &:hover {
      background-color: rgba(0,0,0,.8);
    }
  }
  .rec-pagination {
    display: none;
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

Models.propTypes = {
  cars: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchCars: PropTypes.func.isRequired,
};

const mapStateToProps = ({ cars }) => ({
  cars: cars.cars,
  loading: cars.loading,
  error: cars.error,
});

export default connect(mapStateToProps, { fetchCars })(Models);

/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fetchCars from '../actions/carsActions';
import Car from '../components/Car';

function Models({
  cars, loading, error, fetchCars,
}) {
  useEffect(() => {
    fetchCars();
  }, []);

  let dynamicComponent;

  if (loading === true) {
    dynamicComponent = <Loading>Loading</Loading>;
  } else if (loading === false) {
    dynamicComponent = (
      <Car cars={cars} />
    );
  }

  return (
    <Container>
      <Content>
        <Header>
          <Title>LATEST MODELS</Title>
          <p>Please select a Tesla Model</p>
          <DottedLine />
        </Header>
        {dynamicComponent}
      </Content>
    </Container>
  );
}

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

const Loading = styled.div`
  text-align: center;
  color: #444;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
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

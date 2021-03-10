import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import fetchCar from '../actions/carActions';

function CarPage({
  car, loading, error, fetchCar,
}) {
  const { id } = useParams();

  console.log('car', car);

  useEffect(() => {
    fetchCar(id);
  }, []);

  let toRender;

  if (loading) {
    toRender = <div>Loading</div>;
  } if (!loading && error === null) {
    toRender = (
      <Content>
        <Pictures>
          <StyledCarousel>
            {car.featuredImages && car.featuredImages.map(i => <Item key={i.img}><Image src={i.img} alt="Car images" /></Item>)}
          </StyledCarousel>
        </Pictures>
        <Table>
          <h2>{car.model}</h2>
          <ul>
            <li>
              <p>Range</p>
              <p>
                {car.range}
                {' '}
                mi
              </p>
            </li>
            <li>
              <p>Top Speed</p>
              <p>
                {car.top_speed}
                {' '}
                mph
              </p>
            </li>
            <li>
              <p>
                Peak Power
              </p>
              <p>{car.peak_power}</p>
            </li>
            <li>
              <p>Price</p>
              <p>
                $
                {car.price}
              </p>
            </li>
          </ul>
          <form>
            <input type="date" name="date" />
            <select>
              <option>New York</option>
              <option>London</option>
              <option>Toronto</option>
              <option>Berlin</option>
            </select>
            <button type="submit">Book</button>
          </form>
        </Table>
      </Content>
    );
  } if (!loading && error !== null) {
    toRender = <div>{error}</div>;
  }

  return (
    <Container>
      {toRender}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 30px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Pictures = styled.div`
  width: 100%;
`;

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

  div {
    background-color: white;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: green;
  width: 100%;
  height: 500px;
  margin: 15px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Table = styled.div`
  width: 30%;
  padding: 10px;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    text-align: right;
  }

  ul {
    list-style: none;
  }

  ul > li:nth-of-type(odd) {
    background-color: #e2e3e5;
  }

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(221,221,221);
    padding: 10px;
  }

  li:last-child {
    border-bottom: none;
  }
`;

CarPage.propTypes = {
  car: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchCar: PropTypes.func.isRequired,
};

CarPage.defaultProps = {
  error: null,
};

const mapStateToProps = ({ car: { car, loading, error } }) => ({
  car,
  loading,
  error,
});

export default connect(mapStateToProps, { fetchCar })(CarPage);

import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';

function Models({ cars, loading, errors }) {
  return (
    <Container>
      <Header>
        <Title>LATEST MODELS</Title>
        <p>Please select a Tesla Model</p>
        <DottedLine />
      </Header>
      {loading && <div>Loading</div>}
      <div>
        {cars.map(i => <h3 key={i.model}>{i.model}</h3>)}
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  place-items: center;
  height: 100%;
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

Models.propTypes = {
  cars: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  errors: PropTypes.string,
};

Models.defaultProps = {
  cars: {},
  loading: false,
  errors: '',
};

const mapStateToProps = ({ loading, errors, cars: { cars } }) => ({
  cars,
  loading,
  errors,
});

export default connect(mapStateToProps, null)(Models);

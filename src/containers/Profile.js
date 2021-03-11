import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  bool, func, instanceOf, string,
} from 'prop-types';
import fetchAppointments from '../actions/appointmentsActions';
import API from '../api/api';

function getDate(date) {
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  return `${da}-${mo}-${ye}`;
}

function Profile({
  fetchAppointments, appointments, loading, error,
}) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, [toggle]);

  const handleClick = e => {
    API.delete(`/appointments/${e.target.value}`)
      .then(res => {
        if (res.status === 200) {
          setToggle(toggle => !toggle);
        }
      }, err => err);
  };

  let toRender;

  if (!loading && error !== null) {
    toRender = <div>Errors found!</div>;
  } if (!loading && error === null) {
    if (appointments.length !== 0) {
      toRender = (
        <FlexBox>
          {appointments.map(i => (
            <Card key={i.model}>
              <h3>
                {i.model}
              </h3>
              <p>
                When:
                {' '}
                {getDate(i.date)}
              </p>
              <p>
                Where:
                {' '}
                {i.city}
              </p>
              <button type="button" value={i.id} onClick={handleClick}>Cancel</button>
            </Card>
          ))}
        </FlexBox>
      );
    } else {
      toRender = <h3>No appointments found.</h3>;
    }
  } if (loading) {
    toRender = <h3>Loading</h3>;
  }

  return (
    <Container>
      <Content>
        <h2>
          Your
          Appointments
        </h2>
        {toRender}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  background-color: #f2f2f2;
`;

const Content = styled.div`
  padding: 30px;
  h2 {
    margin-bottom: 30px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px 30px;
  margin: 10px;
  background-color: white;

  p {
    font-size: 18px;
    font-weight: 600;
    padding: 5px 0;
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    height: 55px;
    background: #e74c3c;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
  }
`;

Profile.propTypes = {
  fetchAppointments: func.isRequired,
  appointments: instanceOf(Object).isRequired,
  loading: bool.isRequired,
  error: string,
};

Profile.defaultProps = {
  error: null,
};

const mapStateToProps = ({ appointments }) => ({
  appointments: appointments.items,
  loading: appointments.loading,
  error: appointments.error,
});

export default connect(mapStateToProps, { fetchAppointments })(Profile);

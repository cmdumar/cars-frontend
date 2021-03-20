import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Models from '../containers/Models';
import CarPage from '../containers/CarPage';
import Login from '../containers/Login';
import useToken from '../hooks/useToken';
import Signup from '../containers/Signup';
import Profile from '../containers/Profile';

function Routes() {
  const { token, setToken } = useToken();

  return (
    <Switch>
      <Route exact path="/models" component={Models} />
      <Route exact path="/models/:id" component={CarPage} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/login"><Login setToken={setToken} /></Route>
      <Route path="/signup"><Signup setToken={setToken} /></Route>
      <Route exact path="/">
        {!token ? (
          <>
            <Redirect to="/login" />
          </>
        ) : <Home />}
      </Route>
    </Switch>
  );
}

export default Routes;

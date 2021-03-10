import { Switch, Route } from 'react-router-dom';
// import Home from './Home';
import Models from '../containers/Models';
import CarPage from '../containers/CarPage';
import Profile from '../containers/Profile';
import Signup from './Signup';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/models" component={Models} />
      <Route exact path="/models/:id" component={CarPage} />
      <Route exact path="/lifestyle" render={() => <h1>Lifestyle</h1>} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
}

export default Routes;

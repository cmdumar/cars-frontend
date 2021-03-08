import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Models from '../containers/Models';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/models" component={Models} />
      <Route exact path="/lifestyle" render={() => <h1>Lifestyle</h1>} />
      <Route exact path="/profile" render={() => <h1>Profile</h1>} />
    </Switch>
  );
}

export default Routes;

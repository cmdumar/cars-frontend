import { Switch, Route } from 'react-router-dom';
import Home from './Home';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/models" render={() => <h1>Models</h1>} />
      <Route exact path="/lifestyle" render={() => <h1>Lifestyle</h1>} />
      <Route exact path="/profile" render={() => <h1>Profile</h1>} />
    </Switch>
  );
}

export default Routes;

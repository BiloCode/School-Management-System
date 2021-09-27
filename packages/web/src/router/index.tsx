import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;

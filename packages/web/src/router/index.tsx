import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "@pages/Home";
import Login from "@pages/Login";
import SharedArea from "@pages/SharedArea";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/shared" component={SharedArea} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;

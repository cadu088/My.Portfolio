import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Hub from "../pages/Hub";

// import Error from '../pages/error';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Hub" exact component={Hub} />
    {/* <Route path="/concluded/*" exact component={HomeConcluded} />
    <Route path="/documentos/*" exact component={ViewDocument} />
    
		<Route path="/?o=*" exact component={Home} />
		<Route path="/error/id=*" exact component={Error} />
		<Route path="*" component={ErrorPage} /> */}
  </Switch>
);

export default Routes;

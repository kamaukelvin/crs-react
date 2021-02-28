import React from "react";
import { Switch } from "react-router-dom";

import RouteWithProps from "shared/routes/RouteWithProps";
import routes from "routes";

import DashboardView from './Dashboard'

const DashboardPage = () => {
  return (
    <Switch>
      <RouteWithProps exact path={routes.dashboard} component={DashboardView} />
 
    </Switch>
  );
};

export default DashboardPage;
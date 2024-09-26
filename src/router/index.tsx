import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import DashboardPage from "~/pages/Dashboard";
import CreateRegistration from "~/pages/NewRegistration";

const Router = () => {
  return (
    <HashRouter basename="/caju/">
      <Switch>
        <Route exact path={routes.dashboard} component={DashboardPage} />
        <Route exact path={routes.newUser} component={CreateRegistration} />
        <Route exact path="*">
          <Redirect to={routes.dashboard} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;

import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import DashboardPage from "~/pages/Dashboard";
import NewRegistration from "~/pages/NewRegistration";

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter basename="/caju/">
        <Switch>
          <Route exact path={routes.dashboard} component={DashboardPage} />
          <Route exact path={routes.newUser} component={NewRegistration} />
          <Route
            exact
            path={routes.history}
            component={() => <div>History</div>}
          />

          <Route exact path="*">
            <Redirect to={routes.dashboard} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Router;

import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import { Route, Switch, useHistory } from "react-router-dom";

// Layouts
import routes from "routes";
import PublicLayout from "shared/layout/PublicLayout";
import AuthLayout from "shared/layout/AuthLayout";

// Public Pages
import Login from 'pages/login/Login'

// Authenticated Pages
import Dashboard from 'pages/dashboard'


const pages=[
  {
    exact: true,
    path: routes.login,
    component: Login,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: routes.dashboard,
    component: Dashboard,
    layout: AuthLayout,
  },
]

function App() {

  const history = useHistory();
  return (
    <div className="App">
            <Switch>
        {pages.map(
          ({ exact, path, component: Component, layout: Layout }, index) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              render={(props) => (
                <Layout history={history}>
                  <Component {...props} />
                </Layout>
              )}
            />
          )
        )}
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;

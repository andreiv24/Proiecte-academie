import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// import Auth from "./Pages/Auth";
// import Main from "./Pages/Main";
// import Register from "./Pages/Register";
// import Dashboard from "./Pages/Dashboard";
// import Compensation from "./Pages/Compensation";
// import Overview from "./Pages/Overview";
// import Page404 from "./Pages/Page404";

const Auth = React.lazy(() => import("./Pages/Auth"));
const Main = React.lazy(() => import("./Pages/Main"));
const Register = React.lazy(() => import("./Pages/Register"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard"));
const Compensation = React.lazy(() => import("./Pages/Compensation"));
const Page404 = React.lazy(() => import("./Pages/Page404"));
const Overview = React.lazy(() => import("./Pages/Overview"));
const MenuTabs = React.lazy(() => import("./components/MenuTabs/MenuTabs"));

function App() {
  return (
    <Switch>
      <Route path="/menu-tabs" exact>
        <Suspense fallback={<div>Loading</div>}>
          <MenuTabs />
        </Suspense>
      </Route>

      <Route path="/overview" exact>
        <Suspense fallback={<div>Loading</div>}>
          <Overview />
        </Suspense>
      </Route>

      <Route path="/authentication" exact>
        <Suspense fallback={<div>Loading</div>}>
          <Auth />
        </Suspense>
      </Route>

      <Route path="/registration" exact>
        <Suspense fallback={<div>Loading</div>}>
          <Register />
        </Suspense>
      </Route>

      <Route path="/dashboard" exact>
        <Suspense fallback={<div>Loading</div>}>
          <Dashboard />
        </Suspense>
      </Route>

      <Route path="/compensation" exact>
        <Suspense fallback={<div>Loading</div>}>
          <Compensation />
        </Suspense>
      </Route>

      <Route path="/" exact>
        <Suspense fallback={<div>Loading</div>}>
          <Main />
        </Suspense>
      </Route>

      <Route path="*">
        <Suspense fallback={<div>Loading</div>}>
          <Page404 />
        </Suspense>
      </Route>
    </Switch>
  );
}

export default App;

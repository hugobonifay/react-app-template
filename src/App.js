import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { routes } from './routes';
import A2HS from "./Theme/Components/A2HS";
import Internet from './Theme/Components/Internet';
import Update from "./Theme/Components/Update";

const App = () => (
  <Router>
    <div>

      <Update />
      <A2HS />
      <Internet />

      <Switch>
        {routes.map((route, index) => {
          const Component = route.component;

          return (
            <Route 
              key={index}
              exact path={route.path}
            >
              <Component />
            </Route>
          )

        })}
      </Switch>

    </div>
  </Router>
);

export default App;

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
import Layout from './Theme/Layout';

function App() {
  return (
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
                <Layout>
                  <Component />
                </Layout>
              </Route>
            )

          })}
        </Switch>

      </div>
    </Router>
  );
}

export default App;

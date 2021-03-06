import React from "react";
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    Switch
} from "react-router-dom";
import Home from "./route/Home";
import Detail from "./route/Detail";

function App() {
  return (<Router>
      <Switch>
          <Route path="/hello">
                <h1> Hello !!</h1>
          </Route>
          <Route path="/movie/:id" >
              <Detail />
          </Route>
          <Route path="/" >
              <Home />
          </Route>
      </Switch>
  </Router>);
}

export default App;

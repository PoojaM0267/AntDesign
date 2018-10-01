import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/dashboard" component={Layout} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById("root"));

import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import KanbanBoard from "./Dashboard/KanbanBoard";
import Tasks from "./Dashboard/Tasks";

class Layout extends React.Component {
  render() {
    debugger;
    return (
      <div>
        <Router>
          <div>
            <Dashboard>
              <Switch>
                <Route path="/dashboard" component={KanbanBoard} />
                <Route path="/dashboard/kanban-board" component={KanbanBoard} />
                <Route path="/dashboard/tasks" component={Tasks} />
              </Switch>
            </Dashboard>
          </div>
        </Router>
      </div>
    );
  }
}

export default Layout;

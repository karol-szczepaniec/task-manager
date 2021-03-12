import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import SideBar from "./components/common/SideBar";
import About from "./components/about/About";
import UserList from "./components/users/UserList";
import TaskBoard from "./components/tasks/TaskBoard";
import UserProvider from "./components/common/UserContext";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <UserProvider>
        <Router>
            <SideBar/>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/user-list" component={UserList}/>
                <Route path="/task-board" component={TaskBoard}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="*" component={Dashboard}/>
            </Switch>
        </Router>
        </UserProvider>
    </div>
  );
}

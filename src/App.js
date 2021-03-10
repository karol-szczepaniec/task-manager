import React from "react";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import About from "./components/About";
import UserList from "./components/UserList";
import TaskBoard from "./components/tasks/TaskBoard";

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <Router>
            <SideBar>
            <nav>
                <ul className="nav flex-column m-5">
                    <li className="nav_item"> <Link to="/" className="nav_link">Home</Link> </li>
                    <li className="nav_item"> <Link to="/user-list" className="nav_link">Users List</Link> </li>
                    <li className="nav_item"> <Link to="/task-board" className="nav_link">Task Board</Link> </li>
                    <li className="nav_item"> <Link to="/about" className="nav_link">About</Link> </li>
                </ul>
            </nav>
            </SideBar>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/user-list" component={UserList}/>
                <Route path="/task-board" component={TaskBoard}/>
                <Route path="/" component={Dashboard}/>
            </Switch>
        </Router>
    </div>
  );
}

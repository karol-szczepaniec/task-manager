import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import SideBar from "./components/common/SideBar";
import About from "./components/about/About";
import UserList from "./components/users/UserList";
import TaskBoard from "./components/tasks/TaskBoard";
import UserProvider from "./components/common/UserContext";
import AddTodoItemModal from "./components/tasks/AddTodoItemModal";

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <UserProvider>
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
        </UserProvider>
    </div>
  );
}

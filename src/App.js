import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import SideBar from "./components/common/SideBar";
import About from "./components/about/About";
import UserList from "./components/users/UserList";
import TaskBoard from "./components/tasks/TaskBoard";
import UserProvider from "./components/common/UserContext";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";

export default function App() {
  return (
    <Container className={"h-100"} fluid>
        <UserProvider>
        <Router>
                <Row className={'h-100'}>
                     <Col style={{backgroundColor:"#343a40"}} md={2} className={'p-0'}>
                        <SideBar/>
                    </Col>
                    <Col className={'p-0'}>
                        <Switch>
                            <Route path="/about" component={About}/>
                            <Route path="/user-list" component={UserList}/>
                            <Route path="/task-board" component={TaskBoard}/>
                            <Route path="/dashboard" component={Dashboard}/>
                            <Route path="*" component={Dashboard}/>
                        </Switch>
                    </Col>
                </Row>
        </Router>
        </UserProvider>
    </Container>
  );
}
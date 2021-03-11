import React from "react";
import Navbar from "react-bootstrap/Navbar"
import {Nav, NavbarBrand} from "react-bootstrap";

export default function SideBar(props){
    return(
        <Navbar bg={'dark'}>
            {/*<Navbar.Brand href={'#home'}>*/}
            {/*    Task Manger App*/}
            {/*</Navbar.Brand>*/}
            <Nav className={'nav-flex-column'}>
                {props.children}
            </Nav>
        </Navbar>
    )
}
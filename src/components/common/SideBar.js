import React from "react";
import Navbar from "react-bootstrap/Navbar"
import {NavLink} from "react-router-dom";
import {HouseFill, InfoCircleFill, KanbanFill, PeopleFill} from "react-bootstrap-icons";

export default function SideBar(props){
    return(
        <Navbar bg={'dark'} className={'w-25 mh-100 flex-column p-0 m-0'}>
            <Navbar.Brand href={'/dashboard'} className={'w-100 text-center mb-5'}>
                <h1 className={'text-primary'}>
                    Task Todo
                </h1>
            </Navbar.Brand>
                {/*{props.children}*/}
            <NavLink
                exacly
                to="/dashboard"
                activeClassName="is-active"
                className={'w-100 text-left mt-3 p-2 pl-4'}>
                <h4><HouseFill className={'mr-3'}/>HOME</h4>
            </NavLink>

            <NavLink
                to="/user-list"
                activeClassName="is-active"
                className={'w-100 text-left mt-3 p-2 pl-4'}>
                <h4><PeopleFill className={'mr-3'}/>USER LIST</h4>
            </NavLink>

            <NavLink
                to="/task-board"
                activeClassName="is-active"
                className={'w-100 text-left mt-3 p-2 pl-4'}>
                <h4><KanbanFill className={'mr-3'}/>TASK BOARD</h4>
            </NavLink>

            <NavLink
                to="/about"
                activeClassName="is-active"
                className={'w-100 text-left mt-3 p-2 pl-4'}>
                <h4><InfoCircleFill className={'mr-3'}/>ABOUT</h4>
            </NavLink>
        </Navbar>
    )
}
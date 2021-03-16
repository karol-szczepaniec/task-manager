import React from "react";
import Navbar from "react-bootstrap/Navbar"
import {NavLink} from "react-router-dom";
import {HouseFill, InfoCircleFill, KanbanFill, PeopleFill} from "react-bootstrap-icons";

export default function SideBar(props){
    return(
        <Navbar bg={'dark'} className={'flex-column p-0 pt-4'} sticky={"top"}>
            <Navbar.Brand href={'/dashboard'} className={'text-center mb-5 '}>
                <h2 className={'text-primary'}>
                    Task Todo
                </h2>
            </Navbar.Brand>
                {/*{props.children}*/}
            <NavLink
                exacly={"true"}
                to="/dashboard"
                activeClassName="is-active"
                className={'w-100 text-left mt-3 p-2 pl-3'}>
                <h5><HouseFill className={'mr-2'}/>HOME</h5>
            </NavLink>

            <NavLink
                to="/user-list"
                activeClassName="is-active"
                className={'w-100 text-left mt-3 p-2 pl-3'}>
                <h5><PeopleFill className={'mr-2'}/>USER LIST</h5>
            </NavLink>

            <NavLink
                to="/task-board"
                activeClassName="is-active"
                className={'w-100 text-left mt-3 p-2 pl-3'}>
                <h5><KanbanFill className={'mr-2'}/>TASK BOARD</h5>
            </NavLink>

            <NavLink
                to="/about"
                activeClassName="is-active"
                className={'w-100 text-left mt-3 p-2 pl-3'}>
                <h5><InfoCircleFill className={'mr-2'}/>ABOUT</h5>
            </NavLink>
        </Navbar>
    )
}
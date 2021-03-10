import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import About from "./About";

export default function SideBar(props){
    return(
        <div className="side-bar">
            {props.children}
        </div>
    )
}
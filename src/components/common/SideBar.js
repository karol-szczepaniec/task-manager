import React from "react";

export default function SideBar(props){
    return(
        <div className="side-bar">
            {props.children}
        </div>
    )
}
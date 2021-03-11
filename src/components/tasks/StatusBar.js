import React from "react";

export default function StatusBar(props){
    let info = props.info;
    return(
        <div>
            <h4>Status Bar</h4>
            <p>total task amount: {info.itemsAmount}</p>
            <p>completed tasks: {info.itemsMarked}</p>
            <p>incompleted task tasks: {info.itemsAmount - info.itemsMarked}</p>
        </div>
    )
}
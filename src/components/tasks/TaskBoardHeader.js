import React from "react";

export default function TaskBoardHeader(props){

    let action = props.actions;

    return(
        <div>
            sticky header
            <button onClick={(e)=>{
                e.preventDefault();
                action({payload:{type:'FILTER', fType: 'all'}})
            }}>SHOW ALL</button>

            <button onClick={(e)=>{
                e.preventDefault();
                action({payload:{type:'FILTER', fType: 'completed'}})
            }}>SHOW COMPLETED</button>

            <button onClick={(e)=>{
                e.preventDefault();
                action({payload:{type:'FILTER', fType: 'uncompleted'}})
            }}>SHOW UNCOMPLETED</button>

            <button onClick={(e)=>{
                e.preventDefault();
                action({payload:{type:'SORT', sType: 'date-asc'}})
            }}>SORT up</button>

            <button onClick={(e)=>{
                e.preventDefault();
                action({payload:{type:'SORT', sType: 'date-desc'}})
            }}>SORT down</button>
        </div>
    )
}
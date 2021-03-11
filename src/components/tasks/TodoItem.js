import React from "react";

export default function ToDoItem(props){
    let task ={
        id: props.item.id,
        isCompleted : props.item.isCompleted,
        isShowing: props.item.isShowing,
        createdAt: props.item.createdAt,
        contentText: props.item.contentText,
        assignedEmployeeId: props.item.assignedEmployeeId,
    }

    const styleItem = {
        margin: "50px",
        backgroundColor: "lightgray",
        padding: "10px",
        width: "400px"
    }
    return(
        <div style={styleItem}>
            <p>{task.id} - userName : {task.createdAt}</p>
            <div>{task.assignedEmployeeId ? <p>{task.assignedEmployeeId}</p> : <p>Task without user</p>}</div>
            <p>isCompleted: {task.isCompleted ? 'tak' : 'nie'}</p>
            <p>isShowing: {task.isShowing ? 'tak' : 'nie'}</p>

            <button
                onClick={(e)=>{
                e.preventDefault();
                props.taskActions({payload:{type:'COMPLETED', id: task.id, mark: !task.isCompleted}})
            }}>Zakończ</button>

            <button
                onClick={(e)=>{
                    e.preventDefault();
                    props.taskActions({payload:{type:'REMOVE', id: task.id}})
                }}
            >Usuń</button>
        </div>
    )
}
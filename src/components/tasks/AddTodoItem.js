import React, {useState} from "react";
import {InputGroup} from "react-bootstrap";

export default function AddTodoItem(props){
    const [item, setItem] = useState(
        {
            contentText: "",
            assignedEmployeeId: null,
        },
    )
    let addItem = props.addTodoItem;


    function validate(){
        if(item.contentText.length >2){
            addItem({payload:{type:'ADD', newItem: item}})
            setItem({
                contentText: "",
                assignedEmployeeId: null,
            })
        }else{
            //TODO validate text length
            // if length <2 char -> input error validation
            console.log("error-> need text area validation")
        }
    }

    //TODO searchSelect with employees

    return(
        <div>
        <h4>Add Task</h4>
        <label>Search Select with employy list</label>
            <p>Type task text</p>
            <textarea placeholder="Type task content..."
                      value={item.contentText}
                      onChange={(e)=>{
                        e.preventDefault();
                      if(e.target.value.length <= 124){
                          let newItem = {
                              contentText: e.target.value,
                              assignedEmployeeId: 'id: 44',
                          }
                          setItem(newItem);
                      }
            }}/>
            <button onClick={(e)=>{
                e.preventDefault();
                validate();
            }}>Add task</button>
        </div>
    )
}
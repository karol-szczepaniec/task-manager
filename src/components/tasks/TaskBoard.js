import React, {useReducer, useState} from "react";
import ToDoItem from "./TodoItem";
import AddTodoItemModal from "./AddTodoItemModal";
import TaskBoardHeader from "./TaskBoardHeader";
import StatusBar from "./StatusBar";
import {Container, Row, Col} from "react-bootstrap";

export default function TaskBoard(){

    const [modalShow, setModalShow] = useState(false)
    const [todoItems, dispatch] = useReducer(todoReducer,{
        info: {
            itemsAmount: 2,
            itemsMarked: 1
        },
        todoItems: [
            {
                id: 1,
                _uid: '780cysedh',
                isCompleted: false,
                createdAt: '2021-03-09 10:00:23',
                contentText: 'Suspendisse egestas est eget ex dignissim pellentesque. Nam porttitor libero eget velit tincidunt, id accumsan massa feugiat. Nam cursus venenatis turpis eget viverra. Suspendisse ullamcorper ligula ut ultrices lobortis. Etiam congue vel ante id tempus. Pellentesque quis velit augue. Mauris quis risus venenatis, elementum sem a, bibendum magna. Nulla eget metus felis.',
                assignedEmployeeId: 'id: 11',
                isShowing: true,
            },
            {
                id: 2,
                _uid: 'nchpe87c',
                isCompleted: true,
                createdAt: '2020-01-22 12:34:55',
                contentText: 'Suspendisse egestas est eget ex dignissim pellentesque. Nam porttitor libero eget velit tincidunt, id accumsan massa feugiat. Nam cursus venenatis turpis eget viverra. Suspendisse ullamcorper ligula ut ultrices lobortis. Etiam congue vel ante id tempus. Pellentesque quis velit augue. Mauris quis risus venenatis, elementum sem a, bibendum magna. Nulla eget metus felis.',
                assignedEmployeeId: 'id: 22',
                isShowing: true,
            },
        ]
    })

    function todoReducer(state, action){
        const itemIndex = state.todoItems.findIndex(i=> i.id == action.payload.id)
        const currentStates = state.info;
        //const newList = state.todoItems.map( (item) => ({...item}));
        const newList = state.todoItems.slice();

        switch(action.payload.type){
            case 'COMPLETED':
                newList[itemIndex].isCompleted = action.payload.mark;
                return {info:{
                        itemsAmount: currentStates.itemsAmount,
                        itemsMarked: newList[itemIndex].isCompleted ? currentStates.itemsMarked+1 : currentStates.itemsMarked-1,
                    },todoItems:newList};
            case 'ADD':
                let randomUid =Math.random().toString(36).substring(2);
                let lastId = Math.max.apply(Math,newList.map(i=>i.id))
                let currentTime = new Date();
                function addZero(n){
                    if(n<=9){
                        return "0"+n;
                    }else{
                        return n;
                    }
                }
                currentTime = currentTime.getFullYear()+"-"+addZero(currentTime.getMonth()+1)+"-"+addZero(currentTime.getDate()) +" "+addZero(currentTime.getHours())+":"+addZero(currentTime.getMinutes())+":"+addZero(currentTime.getSeconds());
                let newItem = {
                id: lastId+1,
                _uid: randomUid,
                isCompleted: false,
                createdAt: currentTime,
                contentText: action.payload.newItem.contentText,
                assignedEmployeeId: action.payload.newItem.assignedEmployeeId,
                isShowing: true,
            }
                newList.push(newItem)
                return {
                    info:{
                        itemsAmount: currentStates.itemsAmount+1,
                        itemsMarked: currentStates.itemsMarked,
                    },
                    todoItems: newList,
                }
            case 'REMOVE':
            return {info: {
                itemsAmount: currentStates.itemsAmount-1,
                itemsMarked: newList[itemIndex].isCompleted ?  currentStates.itemsMarked-1 : currentStates.itemsMarked,
                }, todoItems: newList.filter(i=> i.id != action.payload.id)}
            case 'SORT':
                switch (action.payload.sType){
                    case 'date-asc':
                        console.log(newList.forEach(i=>i.createdAt))
                        newList.sort((from, to)=> new Date(from.createdAt) - new Date(to.createdAt))
                        console.log(newList)
                        return {info: currentStates,todoItems: newList}
                    case 'date-desc':
                        todoItems: newList.sort((from, to)=> new Date(to.createdAt) - new Date(from.createdAt))
                        return {info: currentStates, todoItems: newList}
                    default:
                        return state;
                }
            case 'FILTER':
                switch (action.payload.fType){
                    case 'completed':
                        newList.map(i=>{
                            i.isCompleted ? i.isShowing = true : i.isShowing = false;
                        })
                        return {info: currentStates, todoItems: newList};
                    case 'uncompleted':
                        newList.map(i=>{
                            !i.isCompleted ? i.isShowing = true : i.isShowing = false;
                        })
                        return {info: currentStates, todoItems: newList};
                    case 'all':
                    default:
                        newList.map(i=>{
                            i.isShowing = true;
                        })
                        return {info: currentStates, todoItems: newList};
                }
            default:
                return state;
        }
    }

    const todoItemsList = todoItems.todoItems.map(item=>
    { return (item.isShowing ?
        <ToDoItem key={item._uid} item={item} taskActions={dispatch}/>
        : null)
    })

    //TODO add modal onTaskClick, show details
    // !important add case when list isEmpty
    // addTask Modal? to can edit task and change user?
    // Add new task modal?

    return(
        <Container fluid className={'p-0'}>
            <TaskBoardHeader actions={dispatch}/>
            <Row>
                <Col md={8}>
                    {todoItemsList}
                </Col>
                <Col md={4}>
                    <StatusBar info={todoItems.info} modalHandler={()=>setModalShow(true)}/>
                    {/*<AddTodoItem addTodoItem={dispatch}/>*/}
                </Col>
            </Row>
            <AddTodoItemModal show={modalShow} onHide={()=>setModalShow(false)} addTodoItem={dispatch}/>
        </Container>
    )
}
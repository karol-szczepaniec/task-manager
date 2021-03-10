import React, {useReducer} from "react";
import ToDoItem from "./TodoItem";

export default function TaskBoard(){

    const [todoItems, dispatch] = useReducer(todoReducer,{
        info: {
            itemsAmount: 2,
            itemsMarked: 1
        },
        todoItems: [
            {
                id: 1,
                isCompleted: false,
                createdAt: '2021-03-08',
                contentText: 'Suspendisse egestas est eget ex dignissim pellentesque. Nam porttitor libero eget velit tincidunt, id accumsan massa feugiat. Nam cursus venenatis turpis eget viverra. Suspendisse ullamcorper ligula ut ultrices lobortis. Etiam congue vel ante id tempus. Pellentesque quis velit augue. Mauris quis risus venenatis, elementum sem a, bibendum magna. Nulla eget metus felis.',
                assignedEmployeeId: 'id: 11',
                isShowing: true,
                employeeName: "Mateusz Wiśniewski",
                employeeIng: "jeden"
            },
            {
                id: 2,
                isCompleted: true,
                createdAt: '2021-03-09',
                contentText: 'Suspendisse egestas est eget ex dignissim pellentesque. Nam porttitor libero eget velit tincidunt, id accumsan massa feugiat. Nam cursus venenatis turpis eget viverra. Suspendisse ullamcorper ligula ut ultrices lobortis. Etiam congue vel ante id tempus. Pellentesque quis velit augue. Mauris quis risus venenatis, elementum sem a, bibendum magna. Nulla eget metus felis.',
                assignedEmployeeId: 'id: 22',
                isShowing: true,
                employeeName: "Łukasz Walewski",
                employeeIng: "dwa"
            },
        ]
    })

    function todoReducer(state, action){
        const itemIndex = state.todoItems.findIndex(i=> i.id == action.payload.id)
        //const newList = state.todoItems.map( (item) => ({...item}));
        const newList = state.todoItems.slice();

        switch(action.payload.type){
            case 'COMPLETED':
                newList[itemIndex].isCompleted = action.payload.mark;
                return {todoItems:newList};
            case 'ADD':
                return state;
            case 'REMOVE':
                return {todoItems: newList.filter(i=> i.id != action.payload.id)}
            case 'SORT':
                switch (action.payload.sType){
                    case 'date-asc':
                        return {todoItems: newList.sort((from, to)=> new Date(from.createdAt) - new Date(to.createdAt))}
                    case 'date-desc':
                        return {todoItems: newList.sort((from, to)=> new Date(to.createdAt) - new Date(from.createdAt))}
                    default:
                        return state;
                }
            case 'FILTER':
                switch (action.payload.fType){
                    case 'completed':
                        newList.map(i=>{
                            i.isCompleted ? i.isShowing = true : i.isShowing = false;
                        })
                        return {todoItems: newList};
                    case 'uncompleted':
                        newList.map(i=>{
                            !i.isCompleted ? i.isShowing = true : i.isShowing = false;
                        })
                        return {todoItems: newList};
                    case 'all':
                    default:
                        newList.map(i=>{
                            i.isShowing = true;
                        })
                        return {todoItems: newList};
                }
            default:
                return state;
        }
    }

    const todoItemsList = todoItems.todoItems.map(item=>
        <ToDoItem key={item.id} item={item} taskActions={dispatch}/>)

    return(
        <div>
            <div>okruszki ... i akcje filtowania

                <button onClick={(e)=>{
                    e.preventDefault();
                    dispatch({payload:{type:'FILTER', fType: 'all'}})
                }}>POKAŻ WSZYTSKIE</button>

                <button onClick={(e)=>{
                    e.preventDefault();
                    dispatch({payload:{type:'FILTER', fType: 'completed'}})
                }}>POKAŻ UKOŃCZONE</button>

                <button onClick={(e)=>{
                    e.preventDefault();
                    dispatch({payload:{type:'FILTER', fType: 'uncompleted'}})
                }}>POKAŻ NIEUKOŃCZONE</button>

                <button onClick={(e)=>{
                    e.preventDefault();
                    dispatch({payload:{type:'SORT', sType: 'date-asc'}})
                }}>SORT up</button>

                <button onClick={(e)=>{
                    e.preventDefault();
                    dispatch({payload:{type:'SORT', sType: 'date-desc'}})
                }}>SORT down</button>
            </div>
            {todoItemsList}
        </div>
    )
}
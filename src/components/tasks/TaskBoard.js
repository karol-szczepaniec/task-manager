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
                createdAt: '2021-03-08',
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
            case 'Filter':
                return state;
            case 'ADD':
                return state;
            case 'REMOVE':
                return state;
            default:
                return state;
        }
    }

    const todoItemsList = todoItems.todoItems.map(item=>
        <ToDoItem key={item.id} item={item} taskActions={dispatch}/>
        )

    return(
        <div>
            <div>okruszki ... i akcje filtowania</div>
            {todoItemsList}
        </div>
    )
}
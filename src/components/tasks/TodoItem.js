import React from "react";
import {Card, Button} from "react-bootstrap";

export default function ToDoItem(props){
    let task ={
        id: props.item.id,
        isCompleted : props.item.isCompleted,
        isShowing: props.item.isShowing,
        createdAt: props.item.createdAt,
        contentText: props.item.contentText,
        assignedEmployeeId: props.item.assignedEmployeeId,
    }

    //TODO add assigned user to card

    return(
        <Card className={'m-5'}>
            <Card.Header className={task.isCompleted ? "bg-success" : null}>#{task.id}</Card.Header>
            <Card.Body>
                <Card.Title>
                    {task.assignedEmployeeId ? "assigned user" : "Task without user"}
                </Card.Title>
                <Card.Subtitle className={'mb-2 text-muted'}>
                    {task.createdAt}
                </Card.Subtitle>
                <Card.Text>
                    {task.contentText}
                </Card.Text>
            </Card.Body>

            <Card.Footer className={'text-right'}>
                <Button variant={'danger'} size={'sm'} className={'mr-3'}
                    onClick={(e)=>{
                        e.preventDefault();
                        props.taskActions({payload:{type:'REMOVE', id: task.id}})
                    }}
                >remove</Button>
                <>{!task.isCompleted ?
                    <Button variant={'success'} size={'sm'}
                            onClick={(e) => {
                                e.preventDefault();
                                props.taskActions({payload: {type: 'COMPLETED', id: task.id, mark: !task.isCompleted}})
                            }}>finish</Button>:
                    <Button variant={'warning'} size={'sm'}
                            onClick={(e) => {
                                e.preventDefault();
                                props.taskActions({payload: {type: 'COMPLETED', id: task.id, mark: !task.isCompleted}})
                            }}>undo</Button>
                }
                </>
            </Card.Footer>
        </Card>
    )

}
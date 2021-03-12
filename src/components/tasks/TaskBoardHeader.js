import React from "react";
import {Col, Row, Button} from "react-bootstrap";
import {TriangleFill} from "react-bootstrap-icons"

export default function TaskBoardHeader(props){

    let action = props.actions;

    return(
        <Row className={'bg-light p-4 d-flex'}>
            <Col md={3} className={'text-left'}>
                <h3>Tasks List</h3>
            </Col>
            <Col md={9} className={'text-right'}>
                <Button variant={'primary'} className={'mr-3'} onClick={(e)=>{
                    e.preventDefault();
                    action({payload:{type:'FILTER', fType: 'all'}})
                }}>SHOW ALL</Button>

                <Button variant={'primary'} className={'mr-3'} onClick={(e)=>{
                    e.preventDefault();
                    action({payload:{type:'FILTER', fType: 'completed'}})
                }}>SHOW COMPLETED</Button>

                <Button variant={'primary'} className={'mr-3'} onClick={(e)=>{
                    e.preventDefault();
                    action({payload:{type:'FILTER', fType: 'uncompleted'}})
                }}>SHOW UNCOMPLETED</Button>

                <span>Sort: </span>
                <Button variant={'primary'} size={'sm'} onClick={(e)=>{
                    e.preventDefault();
                    action({payload:{type:'SORT', sType: 'date-asc'}})
                }}><TriangleFill/></Button>

                <Button variant={'primary'} size={'sm'} onClick={(e)=>{
                    e.preventDefault();
                    action({payload:{type:'SORT', sType: 'date-desc'}})
                }}><TriangleFill style={{transform: 'rotate(180deg)'}}/></Button>
            </Col>
        </Row>
    )
}
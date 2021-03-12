import React from "react";
import {Col, Row, Button, ButtonGroup, Badge} from "react-bootstrap";
import {TriangleFill} from "react-bootstrap-icons"

export default function TaskBoardHeader(props){

    let action = props.actions;

    return(
        <Row className={'bg-light p-4 sticky-top border-bottom border-secondary'}>
            <Col md={3} className={'text-left'}>
                <h3>Tasks List</h3>
            </Col>
            <Col md={9} className={'text-right align-middle'}>
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

                <Badge>Sort by<br/>add date</Badge>
                <ButtonGroup size={'sm'} vertical className={'ml-1'}>
                <Button variant={'outline-primary'} onClick={(e)=>{
                    e.preventDefault();
                    action({payload:{type:'SORT', sType: 'date-asc'}})
                }}><TriangleFill/></Button>

                <Button variant={'outline-primary'} onClick={(e)=>{
                    e.preventDefault();
                    action({payload:{type:'SORT', sType: 'date-desc'}})
                }}><TriangleFill style={{transform: 'rotate(180deg)'}}/></Button>
                </ButtonGroup>
            </Col>
        </Row>
    )
}
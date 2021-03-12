import React, {useState} from "react";
import SearchSelectUser from "./SearchSelectUser";
import {Modal, Button, Row, Col, InputGroup, FormControl} from "react-bootstrap";

export default function AddTodoItemModal(props){
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
            props.onHide();
        }else{
            //TODO validate text length
            // if length <2 char -> input error validation
            console.log("error-> need text area validation")
        }
    }

    function assignUser(uId){
        //TODO if user id ==0 -> validate error?
        let newItem = {
            contentText: item.contentText,
            assignedEmployeeId: uId,
        }
        setItem(newItem)
    }

    return(
        <Modal
            show={props.show}
            onHide={props.onHide}
            size={'lg'}
            aria-labelledby={"contained-modal-title-vcenter"}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    <span className={'text-uppercase'}>Add task</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={4}>
                        <SearchSelectUser assignUser={assignUser}/>
                    </Col>
                    <Col md={8}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>content</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" aria-label="With textarea"
                                         placeholder="Type task content..."
                                         value={item.contentText}
                                         style={{maxHeight: "450px", minHeight: "60px"}}
                                         onChange={(e)=>{
                                             e.preventDefault();
                                             if(e.target.value.length <= 124){
                                                 let newItem = {
                                                     contentText: e.target.value,
                                                     assignedEmployeeId: item.assignedEmployeeId,
                                                 }
                                                 setItem(newItem);
                                             }
                                         }}
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'success'}  onClick={(e)=>{
                    e.preventDefault();
                    validate();
                }}>Add task</Button>
            </Modal.Footer>
        </Modal>
    )
}
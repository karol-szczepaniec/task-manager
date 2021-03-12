import React, {useState} from "react";
import {useUserContext} from "../common/UserContext";
import {Button, Col, FormControl, InputGroup, Modal, Row} from "react-bootstrap";

export default function UserFormModal(props){
    const u = props.user;
    const modalType = props.modalType;
    let {usersList, dispatch} = useUserContext();

    const [user, setUser] = useState(
        props.user ? {
        id: u.id ? u.id : 0,
        _uid: u._uid ? u._uid : 0,
        name: u.name ? u.name : '',
        createdAt: u.createdAt ? u.createdAt : '',
        email: u.email ? u.email : '',
        workplace: u.workplace ? u.workplace : '',
        isAdmin: u.isAdmin ? u.isAdmin : false,
    } : {
            id: 0,
            _uid: 0,
            name: '',
            createdAt: '',
            email: '',
            workplace: '',
            isAdmin: false,
        })


    function userAction(actionType){
        //TODO validation data?
        switch (actionType){
            case 'ADD_USER':
                dispatch({payload:{type: actionType, item: user,}})
                break;
            case 'EDIT_USER':
                dispatch({payload:{type: actionType, item: user}})
                break;
            case 'REMOVE_USER':
                dispatch({payload:{type: actionType, item: user}})
                break;
            default:
                break;
        }
    }

    function changeData(newValue, type){
        const newData = user;
        switch (type){
            case 'name':
                newData.name = newValue;
                break;
            case 'email':
                newData.email = newValue;
                break;
            case 'workplace':
                newData.workplace = newValue;
                break;
            default:
        }
        setUser({...newData})
    }
    const styleItem = {
        margin: "50px",
        backgroundColor: "lightgray",
        padding: "10px",
        width: "400px"
    }

    return(
    <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className={'text-center'}>
                <span className={'text-uppercase'}>{modalType === 'edit' ? 'Edit' : 'Add'} user</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4 className={'text-center'}>{user.name ? user.name : 'User name'}</h4>

            <Row className={'mt-4'}>
            <Col md={6}>

                <InputGroup className={'mb-4'}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id={'user-name'}>Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Type full user name"
                        aria-label="name"
                        aria-describedby="user-name"
                        value={user.name}
                        onChange={(e)=>{
                            e.preventDefault();
                            changeData(e.target.value, 'name')
                        }}
                    />
                </InputGroup>

                <InputGroup className={'mb-4'}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id={'user-email'}>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Type email"
                        aria-label="email"
                        aria-describedby="user-email"
                        value={user.email}
                        onChange={(e)=>{
                            e.preventDefault();
                            changeData(e.target.value, 'email')
                        }}
                    />
                </InputGroup>

                <InputGroup className={'mb-4'}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id={'user-workplace'}>Workplace</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Type workplace"
                        aria-label="workplace"
                        aria-describedby="user-workplace"
                        value={user.workplace}
                        onChange={(e)=>{
                            e.preventDefault();
                            changeData(e.target.value, 'workplace')
                        }}
                    />
                </InputGroup>
            </Col>

            <Col md={6}>
                <InputGroup className={'mb-4'}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id={'user-id'}>Id</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="-"
                        aria-label="Id"
                        aria-describedby="user-id"
                        value={user.id}
                        readOnly
                    />
                </InputGroup>
                <InputGroup className={'mb-4'}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id={'user-uid'}>Uniq Id</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="-"
                        aria-label="uid"
                        aria-describedby="user-uid"
                        value={user._uid}
                        readOnly
                    />
                </InputGroup>
                <InputGroup className={'mb-4'}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id={'user-createdAt'}>Created at</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="-"
                        aria-label="createdAt"
                        aria-describedby="user-createdAt"
                        value={user.createdAt}
                        readOnly
                    />
                </InputGroup>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
            {modalType === 'edit' ?
                <>
                    <Button variant={'success'} onClick={(e)=>{
                        e.preventDefault();
                        userAction('EDIT_USER');
                        props.onHide()
                    }}
                    >save changes</Button>
                    <Button variant={'danger'} onClick={(e)=>{
                        e.preventDefault();
                        userAction('REMOVE_USER');
                        props.onHide()
                    }}
                    >remove user</Button>
                </>:
                <>
                    <Button variant={'primary'} onClick={(e)=>{
                        e.preventDefault();
                        setUser({
                            id: 0,
                            _uid: 0,
                            name: '',
                            createdAt: '',
                            email: '',
                            workplace: '',
                            isAdmin: false,
                        })
                    }}>clear form</Button>
                <Button variant={'success'} onClick={(e)=>{
                    e.preventDefault();
                    userAction('ADD_USER');
                    props.onHide()
                }}>add New user</Button>
                </>
            }
        </Modal.Footer>
    </Modal>
    )
}

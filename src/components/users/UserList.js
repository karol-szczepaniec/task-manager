import React, {useState} from "react";
import {useUserContext} from "../common/UserContext";
import UserItem from "./UserItem";
import UserFormModal from "./UserFormModal";
import {Row, Col, Container, Button} from "react-bootstrap";

export default function UserList(){

    const [modalShow, setModalShow] = useState({
        showModal: false,
        modalType: null,
    });
    const {usersList, dispatch} = useUserContext();

    const uList = usersList.users.map(u=><UserItem key={u._uid} user={u}/>)

    //TODO sort by createdAt?
    // user states
    return(
        <Container fluid className={'p-0'}>
            <Row className={'bg-light p-4 sticky-top ml-2'}>
                <Col md={3} className={'text-left'}>
                    <h3>Users List</h3>
                </Col>
                <Col md={9} className={'text-right'}>
                    <Button variant={'primary'} onClick={(e)=> {
                        e.preventDefault();
                        setModalShow({showModal: true, actionType: 'add'})
                    }}>add new user</Button>
                </Col>
            </Row>
            <Row>
                <Col md={9}>
                    {uList}
                </Col>
                <Col md={3}>
                    soon will be user states
                </Col>
            </Row>
            <UserFormModal show={modalShow.showModal} onHide={()=> setModalShow({showModal: false, modalType: null})}
                           modalType={modalShow.modalType}
                           user={null}/>

        </Container>
    )
}

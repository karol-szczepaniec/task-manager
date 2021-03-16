import React, {useState} from "react";
import {useUserContext} from "../common/UserContext";
import UserItem from "./UserItem";
import UserFormModal from "./UserFormModal";
import {Row, Col, Container, Button, Pagination} from "react-bootstrap";

export default function UserList(){

    const [modalShow, setModalShow] = useState({
        showModal: false,
        modalType: null,
    });
    const {usersList, dispatch} = useUserContext();

    const uList = usersList.users.map(u=><UserItem key={u._uid} user={u}/>)

    //TODO sort by createdAt?
    // user states
    // pagination
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return(
        <Container fluid className={'m-0'}>
            <Row className={'bg-light p-4 sticky-top border-bottom border-secondary'}>
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
            <Row>
                <Col md={12}>
                <Pagination size="sm">{items}</Pagination>
                </Col>
            </Row>
            <UserFormModal show={modalShow.showModal} onHide={()=> setModalShow({showModal: false, modalType: null})}
                           modalType={modalShow.modalType}
                           user={null}/>

        </Container>
    )
}

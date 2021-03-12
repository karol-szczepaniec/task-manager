import React, {useState} from "react";
import {useUserContext} from "../common/UserContext";
import UserItem from "./UserItem";
import UserFormModal from "./UserFormModal";
import {Row, Col} from "react-bootstrap";

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
        <div className={'container-fluid p-0'}>
            <Row className={'bg-light p-4 d-flex'}>
                <div className={'col-md-6 text-left'}>
                    <h3>Users List</h3>
                </div>
                <div className={'col-md-6 text-right'}>
                    <button className={'btn btn-primary'} onClick={(e)=> {
                        e.preventDefault();
                        setModalShow({showModal: true, actionType: 'add'})
                    }}>add new user</button>
                </div>
            </Row>
            <Row>
                <Col className={'col-sm-9'}>
                    {uList}
                </Col>
                <Col className={'col-sm-3'}>
                    soon will be user states
                </Col>
            </Row>
            <UserFormModal show={modalShow.showModal} onHide={()=> setModalShow({showModal: false, modalType: null})}
                           modalType={modalShow.modalType}
                           user={null}/>

        </div>
    )
}

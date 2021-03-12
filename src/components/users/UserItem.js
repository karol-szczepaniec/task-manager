import React, {useState} from "react";
import UserFormModal from "./UserFormModal";
import {Button, Card, Row} from "react-bootstrap"

export default function UserItem(props){
    const user = props.user;


    //TODO
    // modal confirm if you try remove user

    const [modalShow, setModalShow] = useState({
        showModal: false,
        modalType: null,
    });
    return(
        <Card className={'m-5 w-75'}>
            <Card.Header>#{user.id}</Card.Header>
            <Card.Body>
                <Card.Title className={'mb-4'}>{user.name}</Card.Title>
                <Card.Subtitle className={'mb-2 text-muted'}>{user.workplace}</Card.Subtitle>
                <Card.Text>
                    <p>{user.email}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className={'text-right'}>
                <Button variant={'warning'} size={'sm'} onClick={(e)=>{
                    e.preventDefault();
                    setModalShow({showModal: true, modalType: 'edit'})
                }}>edit</Button>
            </Card.Footer>

            <UserFormModal show={modalShow.showModal} onHide={()=> setModalShow({showModal: false, modalType: null})}
                           modalType={modalShow.modalType}
                           user={user} />
        </Card>
    )
}
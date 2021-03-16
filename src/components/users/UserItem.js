import React, {useState} from "react";
import UserFormModal from "./UserFormModal";
import {Button, Card, Dropdown, Row} from "react-bootstrap"

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
                <Card.Title className={'mb-4'}>
                 <span style={{backgroundColor:"#343a40", borderRadius: "50%", color:"white", width: "45px", height: "45px", display:"inline-block", textAlign:"center", fontSize:"small", paddingTop:"15px", marginRight:"10px"}}>
                {`${user.name.split(/(?<=^\S+)\s/)[0].charAt(0) + (user.name.split(/(?<=^\S+)\s/).length >=2 ? user.name.split(/(?<=^\S+)\s/)[1].charAt(0) : "")}`}
                </span>
                    {user.name}
                </Card.Title>
                <Card.Subtitle className={'mb-2 text-muted'}>{user.workplace}</Card.Subtitle>
                <Card.Text>
                    {user.email}
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
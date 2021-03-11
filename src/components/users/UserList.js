import React from "react";
import {useUserContext} from "../common/UserContext";
import UserItem from "./UserItem";
import UserForm from "./UserForm";
import {Jumbotron} from "react-bootstrap";

export default function UserList(){

    const {usersList, dispatch} = useUserContext();

    const uList = usersList.users.map(u=><UserItem key={u._uid} user={u}/>)

    //TODO sort by createdAt?
    return(
        <div className={'container-fluid p-0'}>
            <div className={'bg-light p-4 d-flex'}>
                <div className={'col-md-6 text-left'}>
                    <h3>Users List</h3>
                </div>
                <div className={'col-md-6 text-right'}>
                    <button className={'btn btn-primary'}>add new User</button>
                </div>
            </div>
            <br/>
            {uList}
            <hr/>
            {/*-->userForm will be modal*/}
            {/*edit user*/}
            <UserForm user={usersList.users[0]} actionType={"edit"}/>
            {/*add user*/}
            <UserForm user={null} actionType={"add"}/>
        </div>
    )
}

import React from "react";
import {useUserContext} from "../common/UserContext";
import UserItem from "./UserItem";
import UserForm from "./UserForm";

export default function UserList(){

    let {usersList, dispatch} = useUserContext();

    const uList = usersList.users.map(u=><UserItem key={u._uid} user={u}/>)

    //TODO sort by createdAt?
    return(
        <div>
            <h3>Users List</h3>
            ->popUp the modal <button>add new User</button>
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

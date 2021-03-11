import React from "react";
import {useUserContext} from "../common/UserContext";
import UserItem from "./UserItem";
export default function UserList(){

    let {usersList, dispatch} = useUserContext();

    const uList = usersList.users.map(u=><UserItem key={u._uid} user={u}/>)

    return(
        <div>
            Users List
            <br/>
            {uList}
        </div>
    )
}
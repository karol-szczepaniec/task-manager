import React from "react";
import {useUserContext} from "../common/UserContext";

export default function SearchSelectUser(props){

    const {usersList, dispatch} = useUserContext();

    const uList = usersList.users.map(u=> <option key={u._uid} id={u._uid} value={u._uid}>{u.name}</option>)

    return(
        <div>
            <select className="selectpicker" selected={'07yrhfu07y'} onChange={(e)=>{
                props.assignUser(e.target.value);

            }}>
                <option id={0} value={0}>Select user</option>
                {uList}
            </select>

        </div>
    )
}
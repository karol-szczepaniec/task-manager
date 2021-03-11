import React from "react";

export default function UserItem(props){

    //TODO add remove user
    // add user
    // show user details in modal form (on click)
    // modal confirm if you try remove user

    const styleItem = {
        margin: "50px",
        backgroundColor: "lightgray",
        padding: "10px",
        width: "400px"
    }

    const user = props.user;
    return(
        <div style={styleItem}>
            <p>id: {user.id} - {user.name}</p>
        </div>
    )
}
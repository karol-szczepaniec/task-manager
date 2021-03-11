import React, {useState} from "react";
import {useUserContext} from "../common/UserContext";

export default function UserForm(props){
    const u = props.user;
    let {usersList, dispatch} = useUserContext();

    const [user, setUser] = useState(
        props.user ? {
        id: u.id ? u.id : 0,
        _uid: u._uid ? u._uid : 0,
        name: u.name ? u.name : '',
        createdAt: u.createdAt ? u.createdAt : '',
        email: u.email ? u.email : '',
        workplace: u.workplace ? u.workplace : '',
        isAdmin: u.isAdmin ? u.isAdmin : false,
    } : {
            id: 0,
            _uid: 0,
            name: '',
            createdAt: '',
            email: '',
            workplace: '',
            isAdmin: false,
        })


    function userAction(actionType){
        //TODO validation data?
        switch (actionType){
            case 'ADD_USER':
                dispatch({payload:{type: actionType, item: user,}})
                break;
            case 'EDIT_USER':
                dispatch({payload:{type: actionType, item: user}})
                break;
            case 'REMOVE_USER':
                dispatch({payload:{type: actionType, item: user}})
                break;
            default:
                break;
        }
    }

    function changeData(newValue, type){
        const newData = user;
        switch (type){
            case 'name':
                newData.name = newValue;
                break;
            case 'email':
                newData.email = newValue;
                break;
            case 'workplace':
                newData.workplace = newValue;
                break;
            default:
        }
        setUser({...newData})
    }
    const styleItem = {
        margin: "50px",
        backgroundColor: "lightgray",
        padding: "10px",
        width: "400px"
    }

    return(
        <div style={styleItem}>
            {props.actionType === 'edit' ? 'Edit' : 'Add'} Modal user
            <p>id: {user.id}</p>
            <p>_uid: {user._uid}</p>
            <p>createdAt: {user.createdAt}</p>

            <label>name</label>
            <input value={user.name}
            onChange={(e)=>{
             e.preventDefault();
             changeData(e.target.value, 'name')
            }}/>
            <br/>
            <label>email</label>
            <input value={user.email}
            onChange={(e)=>{
                e.preventDefault();
                changeData(e.target.value, 'email')
            }}/>
            <br/>
            <label>workplace</label>
            <input value={user.workplace}
            onChange={(e)=>{
                e.preventDefault();
                changeData(e.target.value, 'workplace')
            }}/>
            {props.actionType === 'edit' ?
                <div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    userAction('EDIT_USER');
                }}
                >save changes</button>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        userAction('REMOVE_USER');
                    }}
                    >remove user</button>
                </div>:
                <button onClick={(e)=>{
                    e.preventDefault();
                    userAction('ADD_USER');
                }}>add New user</button>}
        </div>
    )
}

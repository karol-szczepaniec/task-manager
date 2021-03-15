import React, {useState} from "react";
import {useUserContext} from "./UserContext";
import {Card, Dropdown, FormControl} from "react-bootstrap";

export default function SearchSelectUser(props){

    const {usersList, dispatch} = useUserContext();

    const uList = usersList.users.map(u=> {
        return(
            <Dropdown.Item key={u._uid} eventKey={u.id}
                           onClick={(e)=>{
                               e.preventDefault();
                               changeAssignedUser(u._uid)
                           }}
            >
            <span style={{backgroundColor:"#343a40", borderRadius: "50%", color:"white", width: "30px", height: "30px", display:"inline-block", textAlign:"center", fontSize:"small", paddingTop:"7px", marginRight:"10px"}}>
                {`${u.name.split(/(?<=^\S+)\s/)[0].charAt(0) + (u.name.split(/(?<=^\S+)\s/).length >=2 ? u.name.split(/(?<=^\S+)\s/)[1].charAt(0) : "")}`}
            </span>
                {u.name}
            </Dropdown.Item>
        )
    });

    function changeAssignedUser(newUserId){
        props.taskActions({payload: {type: 'ASSIGN_USER', taskId: props.currentTask._uid, userId: newUserId}})
    }


    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            <span style={{backgroundColor:"#343a40", borderRadius: "50%", color:"white", width: "45px", height: "45px", display:"inline-block", textAlign:"center", fontSize:"small", paddingTop:"15px", marginRight:"10px"}}>
                {`${children.props.children[0].split(/(?<=^\S+)\s/)[0].charAt(0) + (children.props.children[0].split(/(?<=^\S+)\s/).length >=2 ? children.props.children[0].split(/(?<=^\S+)\s/)[1].charAt(0) : "")}`}
            </span>
            {children} &#x25bc;
        </a>
    ));

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <FormControl
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type name to filter..."
                        onChange={(e) => {setValue(e.target.value)}}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>{
                                return(
                                    !value || child.props.children[1].toLowerCase().startsWith(value)
                                )
                            }


                        )}
                    </ul>
                </div>
            );
        },
    );

    return(
        <Dropdown className={'mt-3 mb-5'}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                <span>{usersList.users.find(u=>u._uid == props.currentTask.assignedEmployeeId) ? usersList.users.find(u=>u._uid == props.currentTask.assignedEmployeeId).name : 'No assigned...'}  </span>
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                {uList}
            </Dropdown.Menu>
        </Dropdown>
    )
}
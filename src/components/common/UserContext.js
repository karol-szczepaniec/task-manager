import React,{useContext, createContext, useReducer} from "react";

const UserContext = createContext(undefined)

export default function UserProvider(props){

    const [usersList, dispatch] = useReducer(userReducer,{
        users:[
            {
                id: 1,
                _uid: '07yrhfu07y',
                name: 'Karol Szczepaniec',
                createdAt: '2021-03-09 10:00:23',
                email: 'karol.adrian.szczepaniec@gmail.com',
                workplace: 'fron-end developer',
                isAdmin: true,
            },
            {
                id: 2,
                _uid: 'c89jefjc8w',
                name: 'Adam Nowak',
                createdAt: '2021-01-01 22:00:13',
                email: 'adam.nowak@op.pl',
                workplace: 'back-end developer',
                isAdmin: false,

            },
            {
                id: 3,
                _uid: 'cve0fh8wv',
                name: 'Michał Kowalski',
                createdAt: '2020-04-19 11:20:03',
                email: 'michal.kowalski@vp.pl',
                workplace: 'team leader',
                isAdmin: false,
            }
        ]
    })

    function userReducer(state, action){
        //console.log(action.payload.type)
        let newList = state.users.slice();
        const index = newList.findIndex(u=> u.id == action.payload.item.id)
        switch(action.payload.type){
            case 'ADD_USER':
                let randomUid =Math.random().toString(36).substring(2);
                let lastId = Math.max.apply(Math,newList.map(i=>i.id));
                let currentTime = new Date();
                function addZero(n){
                    if(n<=9){
                        return "0"+n;
                    }else{
                        return n;
                    }
                }
                currentTime = currentTime.getFullYear()+"-"+addZero(currentTime.getMonth()+1)+"-"+addZero(currentTime.getDate()) +" "+addZero(currentTime.getHours())+":"+addZero(currentTime.getMinutes())+":"+addZero(currentTime.getSeconds());
                const newUser = {
                    id: lastId+1,
                    _uid: randomUid,
                    name: action.payload.item.name,
                    createdAt: currentTime,
                    email: action.payload.item.email,
                    workplace: action.payload.item.workplace,
                    isAdmin: false,
                }
                newList.push(newUser);
                return {users:newList}

            case 'EDIT_USER':
                newList[index] = action.payload.item;
                return {users: newList};
            case 'REMOVE_USER':
                newList = newList.filter(u=> u._uid != action.payload.item._uid);
                return {users: newList}
            default:
                return state;
        }
    }

    return(
        <UserContext.Provider value={{usersList, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}
export const useUserContext = () => useContext(UserContext);
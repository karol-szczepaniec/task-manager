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
        //add and remove users
        return state;
    }

    return(
        <UserContext.Provider value={{usersList, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);
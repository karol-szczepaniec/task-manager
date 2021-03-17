import React from "react";
import {Jumbotron, Container, Alert} from 'react-bootstrap';

export default function Dashboard(){
    return(
        <Container fluid className={'p-0'}>
            <Jumbotron fluid>
                <Container>
                    <h1 className={'text-center mt-2'}>Welcome to Task manager app</h1>
                    <p className={'mt-5'}>
                        <span>This is a Todo app with couple features...</span>
                    </p>
                </Container>
            </Jumbotron>

            <Alert variant="success" className={'m-5'}>
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>All changes users and tasks will be saved in local storage Your browser, so you can close the page without worrying about some data lose</p>
                    <ul>
                        <li>You can edit, add and remover users from  -><a href={"/user-list"}>users list</a></li>
                        <li>similarly with tasks management -><a href={"/task-board"}>task board</a></li>
                        <p>When you user List will be empty, you can just refresh page, then the default data will restored</p>
                        <li>Deployment -> <a target={"_blank"} href={"http://karol.ssd-linuxpl.com"}>task board live demo</a></li>
                    </ul>
                <hr />
                <p className="mb-0 text-center">
                    Enjoy play with my Todo Task Manager :)
                </p>
            </Alert>
        </Container>
    )
}
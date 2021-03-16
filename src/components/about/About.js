import React from "react";
import {Alert, Container, Jumbotron} from "react-bootstrap";

export default function About(){
    return(
        <Container fluid className={'p-0'}>
            <Jumbotron fluid>
                <Container>
                    <h1 className={''}>About</h1>
                    <p className={'mt-5'}>
                        This is a Todo app with couple features...
                    </p>
                </Container>
            </Jumbotron>
            <Alert variant="success" className={'m-5'}>
                <Alert.Heading>My remote repository</Alert.Heading>
                <a target={"blank"} href={"https://github.com/karol-szczepaniec"}>GitHub</a>
                <p>
                    <a target={"blank"} href={"https://github.com/karol-szczepaniec/task-manager"}>Current application</a>
                </p>
                <hr />
                <p className="mb-0 text-center">
                    Enjoy play with my Todo Task Manager :)
                </p>
            </Alert>
        </Container>
    )
}
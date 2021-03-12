import React from "react";
import {Jumbotron, Container} from 'react-bootstrap';

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
        </Container>
    )
}
import React from "react";
import {Container, Jumbotron} from "react-bootstrap";

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
        </Container>
    )
}
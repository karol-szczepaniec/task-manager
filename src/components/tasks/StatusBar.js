import React from "react";
import {Badge, Button, Card, Col, Row} from "react-bootstrap"

export default function StatusBar(props){
    let info = props.info;
    return(
        <Card className={'mt-5 mr-3'}>
            <Card.Header className={'text-center'}>Tasks status</Card.Header>
            <Card.Body>
                <h2 className={'w-100'}>
                    <Badge variant={'secondary'} className={'w-100 text-left'}>
                        <Row>
                            <Col md={9}>
                                total task amount:
                            </Col>
                            <Col md={3} className={'text-right'}>
                                <span className={ `ml-3 ${info.itemsAmount <=1 ? 'text-warning' : 'text-white'}`}>
                            {info.itemsAmount}
                        </span>
                            </Col>
                        </Row>
                    </Badge>
                </h2>
                <h2 className={'w-100'}>
                    <Badge variant={'secondary'} className={'w-100 text-left'}>
                        <Row>
                            <Col md={9}>
                                finished tasks:
                            </Col>
                            <Col md={3} className={'text-right'}>
                                <span className={ `ml-3 ${info.itemsMarked <=0 ? 'text-danger' : 'text-white'}`}>
                            {info.itemsMarked}
                        </span>
                            </Col>
                        </Row>
                    </Badge>
                </h2>
                <h2 className={'w-100'}>
                    <Badge variant={'secondary'} className={'w-100 text-left'}>
                        <Row>
                            <Col md={9}>
                                unfinished tasks:
                            </Col>
                            <Col md={3} className={'text-right'}>
                                <span className={ `ml-3 ${(info.itemsAmount - info.itemsMarked) <=0 ? 'text-success' : 'text-warning'}`}>
                            {info.itemsAmount - info.itemsMarked}
                        </span>
                            </Col>
                        </Row>
                    </Badge>
                </h2>

            </Card.Body>
            <Card.Footer className={'bg-white text-center border-white'}>
                <Button variant={'info'} size={'sm'}>add new task</Button>
            </Card.Footer>
        </Card>
    )
}
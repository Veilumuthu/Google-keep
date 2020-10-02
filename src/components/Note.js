import React from 'react';
import { Card, CardText, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

const Note = ({ id, title, notes }) => {
    return (
        <Col sm="4">
            <Link to={`/edit/${id}`} style={{ textDecoration : "none"}}>
                <Card body className="note">
                        <CardText className="notetext">{title}</CardText>
                        <CardText className="noteText">{notes}</CardText>
                </Card>
            </Link>
        </Col>
    )
}

export default Note;
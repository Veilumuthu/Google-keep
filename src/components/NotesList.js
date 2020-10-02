import React from 'react';
import Note from './Note';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';

const NotesList = (props) => {
    return (
        <div>
            <Row>
                {
                    props.notes &&
                    props.notes.map((note) => {
                        return <Note  key = {note.id} {...note}/>
                    })
                }
            </Row>
        </div>
    )
}

const props = (state) => {
    return {
        notes : state.notes
    }
}
export default connect(props)(NotesList);
import React from 'react';
import Note from './Note';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import Selector from '../selector/selector';
import NotesFilter from './NotesFilter';

const NotesList = (props) => {
    return (
        <div>
            <div>
                <NotesFilter />
            </div>
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
        notes : Selector(state.notes, state.filters)
    }
}
export default connect(props)(NotesList);
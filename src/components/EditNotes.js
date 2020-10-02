import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { startEditNotes, startRemoveNotes } from '../redux/action';

const EditNotes = (props) => {
    console.log(props)
    const onSubmit = (note) => {
        props.startEditNotes(props.note.id, note)
        props.history.push('/')
    }
    // const onRemove = () => {
    //     props.stateRemoveNotes({id : props.note.id})
    //     props.history.push('/')
    // }
    return (
        <div>
            <NoteForm note={props.note} onSubmit={onSubmit}/>
            <button className="but" onClick={() => {
                props.startRemoveNotes({ id: props.note.id })
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
}

const props = (state, props) => {
    return {
        note : state.notes.find((note) => note.id === props.match.params.id)
    }
}

const mapProps = (dispatch) => {
    return {
        startEditNotes : (id, note) => dispatch(startEditNotes(id,note)),
        startRemoveNotes : (data) => dispatch(startRemoveNotes(data))
    }
}

export default connect(props, mapProps)(EditNotes);
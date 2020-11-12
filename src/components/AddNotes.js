import React from "react";
import NoteForm from './NoteForm';
import Header from './Header';
import NotesList from './NotesList';
import { startAddNotes } from "../redux/action";
import { connect } from 'react-redux'


const AddNotes = ({ startAddNotes, history }) => {
    const onSubmit = (note) => {
        startAddNotes(note);
        history.push('/');
    }
    const title = "Google-Keep";
    const subtitle = "Make your day as per your plan";
    return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <div className="container">
                <NoteForm onSubmit={onSubmit} />
                <NotesList />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddNotes: (note) => dispatch(startAddNotes(note))
})

export default connect(undefined, mapDispatchToProps)(AddNotes);
import React from 'react';
import ModalForm from './ModalForm'

class NoteForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: props.note ? props.note.title : '',
            notes: props.note ? props.note.notes : ''
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }))
    }
    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({ notes }))
    }

    onEnter = (e) => {
        e.preventDefault()
    }
    onSubmit = (e) => {
        const title = this.state.title;
        const notes = this.state.notes;
        this.props.onSubmit({ title, notes });
        this.setState({
            title: "",
            notes: ""
        })
    }

    render() {
        return (
            <div className="container">
                <ModalForm
                    title={this.state.title}
                    notes={this.state.notes}
                    onEnter={this.onEnter}
                    onTitleChange={this.onTitleChange}
                    onNotesChange={this.onNotesChange}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

export default NoteForm;

// <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div className="modal-dialog">
//     <div className="modal-content">
//         <div className="modal-header">
//             <h5 className="modal-title" id="exampleModalLabel"> {this.state.title}</h5>
//             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button>
//         </div>
//         <div className="modal-body">
//             <textarea className="text" name="notes" placeholder="Take a note" onChange={this.onNotesChange} value={this.state.notes} style={{ width: "28rem" }} />
//         </div>
//         <div className="modal-footer">
//             <button type="button" className="btn btn-primary" onClick={this.onSubmit} data-dismiss="modal">Save changes</button>
//         </div>
//     </div>
// </div>
// </div>
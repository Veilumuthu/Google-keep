import React from 'react';

class NoteForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title : props.note ? props.note.title : '',
            notes : props.note ? props.note.notes : ''
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
    // onSubmit=(e) => {
    //     e.preventDefault();
    //     if (!this.state.title || !this.state.notes) {
    //         this.setState(() => ({ error: 'Please provide title and notes'}))
    //     } else {
    //         this.setState(() => ({ error: ''}));
    //         this.props.onSubmit({
    //             title:this.state.title,
    //             notes: this.state.notes
    //         })
    //     }
    // }
    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const notes = this.state.notes;
        this.props.onSubmit({ title, notes });
        this.setState({
            title : "",
            notes : ""
        })
    }
    render() {
        return (
            <div className="container">
                <form className="text-center" style={{margin:"1rem"}} onSubmit={this.onSubmit}>
                    <input id = "input" className="text" type="text" name="Title" placeholder="Title" onChange={this.onTitleChange} value={this.state.title} autoFocus/><br/>
                    <textarea className="text" name="notes" placeholder="Take a note" onChange={this.onNotesChange} value={this.state.notes} /><br/>
                    <button style={{ backgroundColor: "green", color: "white"}}>Save</button>
                </form>
            </div>
        )
    }
}

export default NoteForm;
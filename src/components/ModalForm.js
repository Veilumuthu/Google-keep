import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalForm = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setModal(!modal)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const title = props.title;
        const notes = props.notes;
        props.onSubmit({ title, notes })
        setModal(!modal)
    }
    return (
        <div>
            <form className="text-center" style={{ margin: "1rem" }} onSubmit={props.onEnter}>
                <input
                    id="input"
                    className="text"
                    type="text"
                    name="Title"
                    placeholder="Title"
                    onChange={props.onTitleChange}
                    value={props.title}
                    autoFocus
                    onKeyPress={handleKeyPress}
                /><br />
                {/* <textarea className="text" name="notes" placeholder="Take a note" onChange={this.onNotesChange} value={this.state.notes} /><br />
    <button style={{ backgroundColor: "green", color: "white" }}>Save</button> */}
            </form>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                <ModalBody>
                    <textarea name="notes" placeholder="Take a note" onChange={props.onNotesChange} value={props.notes} style={{ width: "450px" }} /><br />
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-primary" onClick={onSubmit}>Save changes</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalForm;
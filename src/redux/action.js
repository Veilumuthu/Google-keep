import database from '../firebase/firebase';

const addNotes = (note) => ({
    type: 'ADD_NOTES',
    note
});

export const startAddNotes = (notesData = {}) => {
    return (dispatch) => {
        const {
            title = '', 
            notes = '', 
        } = notesData;
        const note = { title, notes };

        return database.ref(`notes`).push(note).then((ref) => {
            dispatch(addNotes({
                id: ref.key,
                ...note
            }))
        })
    };
}

const editNotes = (id, update) => ({
    type: 'EDIT_NOTES',
    id,
    update
})

export const startEditNotes = (id, update) => {
    return (dispatch) => {
        return database.ref(`notes/${id}`).update(update).then(() => {
            dispatch(editNotes(id,update))
        })
    }
}

const removeNotes = ({id} = {}) => ({
    type:"REMOVE_NOTES",
    id
})

export const startRemoveNotes = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`notes/${id}`).remove().then(() => {
            dispatch(removeNotes({id}))
        })
    }
}

const setNotes = (notes) => ({
    type : "SET_NOTES",
    notes
})

export const startSetNotes = () => {
    return (dispatch) => {
        return database.ref(`notes`).once('value').then((snapshot) => {
            const notes = [];

            snapshot.forEach((childSnapshot) => {
                notes.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setNotes(notes));
        })
    }
}
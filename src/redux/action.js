import database from '../firebase/firebase';

//adding notes
const addNotes = (note) => ({
    type: 'ADD_NOTES',
    note
});

export const startAddNotes = (notesData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title = '',
            notes = '',
        } = notesData;
        const note = { title, notes };

        return database.ref(`users/${uid}/notes`).push(note).then((ref) => {
            dispatch(addNotes({
                id: ref.key,
                ...note
            }))
        })
    };
}

//editing note
const editNotes = (id, update) => ({
    type: 'EDIT_NOTES',
    id,
    update
})

export const startEditNotes = (id, update) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/notes/${id}`).update(update).then(() => {
            dispatch(editNotes(id, update))
        })
    }
}

//removing notes
const removeNotes = ({ id } = {}) => ({
    type: "REMOVE_NOTES",
    id
})

export const startRemoveNotes = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/notes/${id}`).remove().then(() => {
            dispatch(removeNotes({ id }))
        })
    }
}

//getting notes on screen
const setNotes = (notes) => ({
    type: "SET_NOTES",
    notes
})

export const startSetNotes = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/notes`).once('value').then((snapshot) => {
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

//filters

export const titleFilter = (title = "") => ({
    type: "TITLE_FILTER",
    title
})
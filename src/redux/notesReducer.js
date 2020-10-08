const notesReducerDefaultState = [];

export default (state = notesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_NOTES':
            return [
                ...state, action.note
            ]
        case 'EDIT_NOTES':
            return state.map((note) => {
                if (note.id === action.id) {
                    return {
                        ...note,
                        ...action.update
                    }
                }else {
                    return note
                }
            })
        case 'REMOVE_NOTES':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_NOTES':
            return action.notes
        default:
            return state
    }
}
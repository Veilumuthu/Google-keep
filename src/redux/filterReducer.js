export default (state = { title : "" } , action) => {
    switch (action.type){
        case 'TITLE_FILTER':
            return { ...state, title : action.title }
        default :
            return state
    }
}
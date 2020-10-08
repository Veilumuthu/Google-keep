import React from 'react';
import { connect } from 'react-redux';
import { titleFilter } from '../redux/action';

class NotesFilter extends React.Component {
    onTitleChange = (e) => {
        this.props.titleFilter(e.target.value)
    }
    render() {
        return (
            <div className="text-center" style={{ margin : " 1rem "}}>
                <input type="text" placeholder="Select Notes" value={this.props.filters.title} onChange={this.onTitleChange}/>
            </div>
        )
    }
}

const props = (state) => ({
    filters : state.filters
})

const mapProps = (dispatch) => ({
    titleFilter : (title) => dispatch(titleFilter(title))
})

export default connect(props, mapProps)(NotesFilter)
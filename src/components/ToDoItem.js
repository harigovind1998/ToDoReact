import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component{

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.ToDoItem.completed ? 'line-through' : 'none'
        }
    }
    render(){
        const { id, title, completed } = this.props.ToDoItem;
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={completed}/>{' '}
                    {title}
                    <button onClick={this.props.delToDo.bind(this,id)}style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}
//PropTypes
ToDoItem.propTypes={
    ToDoItem: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}

export default ToDoItem;
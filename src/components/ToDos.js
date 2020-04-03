import React from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDos extends React.Component{

  render(){
    return this.props.todos.map((todo)=>(
    <ToDoItem key={todo.id} ToDoItem={todo} markComplete = {this.props.markComplete} delToDo={this.props.delToDo}/>
    ));
  }
}

//PropTypes
ToDos.propTypes={
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired
}

export default ToDos;

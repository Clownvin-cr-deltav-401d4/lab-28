import React from 'react';

import TodoItem from './todo-item';

class TodoList extends React.Component {
  render() {
    return (
      <>
        {this.props.todos.map(todo => (
          <TodoItem item={todo} delete={this.props.deleteTodo} toggleComplete={this.props.toggleComplete} />
        ))}
      </>
    )
  }
}

export default TodoList;

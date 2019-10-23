import React from 'react';

import Header from './components/header';
import Form from './components/form';
import TodoList from './components/todo-list';

let id = 0;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    }
  }

  createTodo = todoText => {
    this.setState(state => state.todo.push({id: id++, text: todoText, complete: false}));
  }

  deleteTodo = todoItem => {
    this.setState(state => state.todo = state.todo.filter(item => item.id !== todoItem.id));
  }

  toggleComplete = todoItem => {
    this.setState(state => {
      const item = state.todo.find(item => item.id === todoItem.id);
      item.complete = !item.complete;
      return state;
    });
  }

  render() {
    return (
      <>
        <Header count={this.state.todo.length} />
        <Form createTodo={this.createTodo}/>
        <TodoList
          todos={this.state.todo}
          deleteTodo={this.deleteTodo}
          toggleComplete={this.toggleComplete} />
      </>
    );
  }
}

export default App;

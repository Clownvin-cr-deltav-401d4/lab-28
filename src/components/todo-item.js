import React from 'react';

class TodoItem extends React.Component {

  delete = e => {
    e.preventDefault();
    this.props.delete(this.props.item);
  }

  toggleComplete = e => {
    e.preventDefault();
    this.props.toggleComplete(this.props.item);
  }

  render() {
    return (
      <li className={`complete-${this.props.item.complete}`}>
        <span id={this.props.item.id} onClick={this.toggleComplete}>
          {this.props.item.text}
        </span>
        <button onClick={this.delete}>delete</button>
      </li>
    )
  }
}

export default TodoItem;

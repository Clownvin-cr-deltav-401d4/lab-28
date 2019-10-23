import React from 'react';

class Form extends React.Component {

  onSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.refs.input.value);
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input placeholder="Add To Do List Item" ref='input'/>
        </form>
      </>
    )
  }
}

export default Form;

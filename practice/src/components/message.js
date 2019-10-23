import React from 'react';
import Title from './title';
import Form from './form';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {words: 'These words belong to the message component'};
  }
  render() {
    return (
      <>
        <Title text={this.props.title} />
        <h2>{this.props.text}</h2>
        <h3>{this.state.words}</h3>
        <h4>You Typed: {this.props.input}</h4>
        <Form do={this.props.action} />
      </>
    );
  }
}

export default Message;

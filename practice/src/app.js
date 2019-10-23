import React from 'react';

import './styles.css';

import Message from './components/message.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  sayIt = string => {
    this.setState(state => state.input = string);
  }

  render() {
    return (
      <Message action={this.sayIt} input={this.state.input} title="This is my title" text="This is my amazing application" />
    );
  }
}

export default App;

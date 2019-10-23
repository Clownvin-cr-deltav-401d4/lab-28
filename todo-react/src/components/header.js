import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <h2>There are {this.props.count} Items To Complete</h2>
      </>
    )
  }
}

export default Header;

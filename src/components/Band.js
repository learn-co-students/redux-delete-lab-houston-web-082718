import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        <span>{this.props.band.name}</span><button onClick={() => this.props.onClickDelete(this.props.band.id) } >DELETE</button>
      </li>
    );
  }
};

export default Band;

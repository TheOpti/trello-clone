import React, { Component } from 'react';

import './styles.css';

class SingleBoard extends Component {
  render() {
    const {
      title,
      items = [],
    } = this.props;

    return (
      <div className="single-board card bg-light">
        <div className="card-header">
          { title }
        </div>
        <div className="single-board__body">
          { items.map((item) => {
            return (
              <div className="single-board__entry" key={item.id}>
                { item.entry }
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default SingleBoard;

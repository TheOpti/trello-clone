import React, { Component } from 'react';

import './styles.css';

class List extends Component {
  render() {
    const {
      list = [],
    } = this.props;

    const {
      title,
      items = [],
    } = list;

    console.log('List props ', this.props);

    return (
      <div className="list card bg-light">
        <div className="card-header">
          { title }
        </div>
        <div className="list__body">
          { items.map((item) => {
            return (
              <div className="list__entry" key={item.id}>
                { item.entry }
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default List;

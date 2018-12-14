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

    return (
      <div className="list">
        <div className="list__header">
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
          <div className="list__add-new-item">
            Add new item...
          </div>
        </div>
      </div>
    );
  }
}

export default List;

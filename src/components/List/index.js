import React, { Component } from 'react';

import './styles.scss';

class List extends Component {

  addNewItem = () => {
    const { openNewListElemModal, list } = this.props;

    openNewListElemModal(list.id);
  };

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
          <div className="list__add-new-item" onClick={this.addNewItem}>
            Add new item...
          </div>
        </div>
      </div>
    );
  }
}

export default List;

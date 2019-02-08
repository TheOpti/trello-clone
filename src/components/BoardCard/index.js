import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import visibilityTypes from 'constants/visibilityTypes';
import Button from 'components/Button';
import Text from 'components/Text';

import './styles.scss';


class BoardCard extends Component {
  render() {
    const { board } = this.props;
    const {
      id,
      name,
      lists,
      color,
      visibility,
    } = board;

    const noOfLists = lists.length;
    const noOfItems = lists.reduce((prev, curr) => prev + curr.items.length, 0);

    const classes = cx(
      'board-card',
      `color--${color}`,
    );

    const { title: visibilityName} = visibilityTypes.find(elem => elem.id === visibility);

    return (
      <div className={classes}>
        <div className="board-card__header">
          <Text as="h4" bold>
            { name }
          </Text>
        </div>
        <div className="board-card__body">
          <div>
            <div className="board-card__row">
              <div>No. of lists:</div>
              <div>{ noOfLists }</div>
            </div>
            <div className="board-card__row">
              <div>No. of items:</div>
              <div>{ noOfItems }</div>
            </div>
            {
              visibilityName && (
                <div className="board-card__row board-card__row--visibility">
                  <div>Visibility</div>
                  <div>{ visibilityName }</div>
                </div>
              )
            }
          </div>
          <div className="board-card__button-row">
            <Link to={`/board/${id}`}>
              <Button
                className="board-card__button"
                label="Go to board"
                color="primary"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardCard;

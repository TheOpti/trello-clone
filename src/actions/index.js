import actionTypes from '../actionTypes';

export const createBoard = (boardName) => {
  return {
    type: actionTypes.BOARD_CREATE_NEW_BOARD,
    boardName
  }
};
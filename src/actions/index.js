import uuidv1 from 'uuid/v1';
import actionTypes from '../actionTypes';

export const createBoard = (boardName) => {
  const newBoard = {
    id: uuidv1(),
    name: boardName,
    lists: [],
  };

  return {
    type: actionTypes.BOARD_CREATE_NEW_BOARD,
    board: newBoard,
  }
};
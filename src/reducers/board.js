import uuidv1 from 'uuid/v1';
import actionTypes from '../actionTypes';

const initialState = {
  boards: []
};

export const board = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOARD_CREATE_NEW_BOARD: {
      console.log('reducer ', action);
      const newBoard = {
        id: uuidv1(),
        name: action.boardName
      };

      const boards = [...state.boards, newBoard];

      return Object.assign({}, { boards });
    }


    default:
      return state
  }
};

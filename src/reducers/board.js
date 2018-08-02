import actionTypes from '../actionTypes';

const initialState = {
  boards: []
};

export const board = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOARD_CREATE_NEW_BOARD: {
      const boards = [...state.boards, action.board];

      return {
        ...state,
        boards,
      };
    }


    default:
      return state
  }
};

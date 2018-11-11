import {
  BOARD_CREATE_NEW_BOARD,
  BOARD_CREATE_NEW_LIST,
} from '../actions';

const initialState = {
  boards: [
    {
      id: '1',
      name: 'Example board',
      lists: [
        {
          id: 'a',
          title: 'First list',
          items: [
            {
              id: '1',
              entry: 'Go to gym'
            },
            {
              id: '2',
              entry: 'Study hard'
            },
            {
              id: '3',
              entry: 'Make homework'
            }
          ]
        },
        {
          id: 'b',
          title: 'Another list',
          items: [
            {
              id: '4',
              entry: 'Do something!'
            }
          ]
        }
      ],
    }
  ]
};

export const board = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_CREATE_NEW_BOARD: {
      const boards = [...state.boards, action.board];

      return {
        ...state,
        boards,
      };
    }

    case BOARD_CREATE_NEW_LIST: {
      const updatedBoards = state.boards.map((board) => {
        if (board.id === action.boardId) {
          board.lists.push(action.list);
        }

        return {
          ...state,
          boards: updatedBoards,
        };
      });
    }


    default:
      return state
  }
};

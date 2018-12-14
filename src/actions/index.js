import uuidv1 from 'uuid/v1';


export const BOARD_CREATE_NEW_BOARD = 'BOARD_CREATE_NEW_BOARD';

export const createBoard = (boardName) => {
  const newBoard = {
    id: uuidv1(),
    name: boardName,
    lists: [],
  };

  return {
    type: BOARD_CREATE_NEW_BOARD,
    board: newBoard,
  }
};


export const BOARD_CREATE_NEW_LIST = 'BOARD_CREATE_NEW_LIST';

export const createNewList = (boardId, listTitle) => {
  const newList = {
    id: uuidv1(),
    title: listTitle,
    items: [],
  };

  return {
    type : BOARD_CREATE_NEW_LIST,
    list: newList,
    boardId,
  }
};


export const BOARD_ADD_ELEM_TO_LIST = 'BOARD_ADD_ELEM_TO_LIST';

export const createNewElemInList = (boardId, listId, elemTitle) => {
  const newElem = {
    id: uuidv1(),
    entry: elemTitle,
  };

  return {
    type: BOARD_ADD_ELEM_TO_LIST,
    newElem,
    boardId,
    listId,
  }
};

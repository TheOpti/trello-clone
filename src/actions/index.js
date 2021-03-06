import uuidv1 from 'uuid/v1';


export const BOARD_CREATE_NEW_BOARD = 'BOARD_CREATE_NEW_BOARD';

export const createBoard = (board) => {
  const newBoard = {
    ...board,
    visibility: board.visibility.id,
    id: uuidv1(),
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


export const UI_MODAL_OPEN = 'UI_MODAL_OPEN';

export const openModal = (modalName) => {
  return {
    type: UI_MODAL_OPEN,
    modalName,
  };
};


export const UI_MODAL_CLOSE = 'UI_MODAL_CLOSE';

export const closeModal = (modalName) => {
  return {
    type: UI_MODAL_CLOSE,
    modalName,
  };
};

import {
  UI_MODAL_OPEN,
  UI_MODAL_CLOSE,
} from '../actions';

import modalsNames from '../constants/modals';

const initialState = {
  modals: {
    [modalsNames.ADD_NEW_LIST_MODAL]: false,
    [modalsNames.ADD_NEW_LIST_ELEM_MODAL]: false,
    [modalsNames.ADD_NEW_BOARD_MODAL]: false,
  },
};

export const ui = (state = initialState, action) => {
  switch (action.type) {
    case UI_MODAL_OPEN: {
      const { modalName } = action;
      const { modals } = state;

      modals[modalName] = true;

      return Object.assign({}, state, modals);
    }


    case UI_MODAL_CLOSE: {
      const { modalName } = action;
      const { modals } = state;

      modals[modalName] = false;

      return Object.assign({}, state, modals);
    }

    default:
      return state;
  }
};

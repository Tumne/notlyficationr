import { TYPE } from './constants';
import { IAction, INote, IState } from './interfaces';
import { localStorageUtil, LSKey } from './utils/localStorageUtil';

const reducer = (state: IState, action: IAction): IState => {
  const removeLSNotes = () => {
    localStorageUtil.remove(LSKey.NOTES);
  };

  switch (action.type) {
    case TYPE.ADD_NOTE:
      return {
        ...state,
        notes: [...(action.payload as INote[]), ...state.notes],
      };
    case TYPE.UPDATE_NOTE:
      const editedNotes = state.notes.map((note) =>
        note.id === (action.payload as INote).id
          ? { ...note, ...(action.payload as INote) }
          : note
      );
      return {
        ...state,
        notes: editedNotes,
      };
    case TYPE.DELETE_NOTE:
      const newNotes = state.notes.filter((note) => note.id !== action.payload);
      if (!newNotes.length) {
        removeLSNotes();
      }
      return {
        ...state,
        notes: newNotes,
      };
    case TYPE.RESET_NOTES:
      removeLSNotes();
      return { ...state, notes: [] };
    case TYPE.SET_SELECTED_NOTE:
      const selectedNote =
        state.notes.find((note) => note.id === action.payload) || null;
      return { ...state, selectedNote };
    default:
      throw new Error();
  }
};

export default reducer;

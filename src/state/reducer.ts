import { TYPE } from './constants';
import { initialState } from './context';
import { IAction, INote, IState } from './interfaces';
import { localStorageUtil, LSKey } from './utils/localStorageUtil';

const reducer = (state: IState, action: IAction): IState => {
  const resetLocalStorage = () => {
    localStorageUtil.remove(LSKey.NOTES);
    localStorageUtil.remove(LSKey.SELECTED_NOTE);
  };

  switch (action.type) {
    case TYPE.ADD_NOTE:
      const addNotePayload = action.payload as INote;
      return {
        ...state,
        notes: [addNotePayload, ...state.notes],
        selectedNote: { ...state.selectedNote, ...addNotePayload },
        isNotesOpen: false,
      };

    case TYPE.UPDATE_NOTE:
      const newNote = action.payload as INote;
      const updatedNotes = state.notes.map((note) => ({
        ...note,
        ...(note.id === newNote.id && newNote),
      }));
      return {
        ...state,
        notes: updatedNotes,
        selectedNote: newNote,
      };

    case TYPE.DELETE_NOTE:
      const newNotes = state.notes.filter((note) => note.id !== action.payload);
      if (!newNotes.length) {
        resetLocalStorage();
      }
      return {
        ...state,
        notes: newNotes,
        selectedNote: newNotes.length ? newNotes[0] : null,
      };

    case TYPE.RESET_NOTES:
      resetLocalStorage();
      return { ...initialState };

    case TYPE.SET_SELECTED_NOTE:
      const selectedNote =
        state.notes.find((note) => note.id === action.payload) || null;
      return { ...state, selectedNote, isNotesOpen: false };

    case TYPE.SET_NOTES_OPEN:
      return {
        ...state,
        selectedNote: null,
        isNotesOpen: action.payload as boolean,
      };

    default:
      throw new Error();
  }
};

export default reducer;

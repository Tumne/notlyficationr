import { TYPE } from './constants';
import { initialState } from './context';
import { IAction, INote, IState } from './interfaces';
import { localStorageUtil, LSKey } from '../utils/localStorageUtil';

const reducer = (state: IState, action: IAction): IState => {
  const resetLocalStorage = () => {
    localStorageUtil.remove(LSKey.NOTES);
    localStorageUtil.remove(LSKey.SELECTED_NOTE);
  };

  // adds a new note
  switch (action.type) {
    case TYPE.ADD_NOTE:
      const addNotePayload = action.payload as INote;
      return {
        ...state,
        notes: [addNotePayload, ...state.notes],
        selectedNoteId: addNotePayload.id,
        isAddNotesOpen: false,
      };

    // updates notes array
    // sets updated note to selectedNoteId
    case TYPE.UPDATE_NOTE:
      const newNote = action.payload as INote;
      const updatedNotes = state.notes.map((note) => ({
        ...note,
        ...(note.id === newNote.id && newNote),
      }));
      return {
        ...state,
        notes: updatedNotes,
        selectedNoteId: newNote.id,
      };

    // deletes note by id
    case TYPE.DELETE_NOTE:
      const newNotes = state.notes.filter((note) => note.id !== action.payload);
      // destroy our localStorage fields
      if (!newNotes.length) {
        resetLocalStorage();
      }
      return {
        ...state,
        notes: newNotes,
        selectedNoteId: newNotes.length ? newNotes[0].id : null,
      };

    // reset state
    case TYPE.RESET_NOTES:
      resetLocalStorage();
      return initialState;

    // change previews of different notes
    case TYPE.SET_SELECTED_NOTE:
      const selectedNoteId =
        (state.notes.find((note) => note.id === action.payload) || {}).id ||
        null;
      return { ...state, selectedNoteId, isAddNotesOpen: false };

    // open add note form
    case TYPE.SET_ADD_NOTES_OPEN:
      localStorageUtil.remove(LSKey.SELECTED_NOTE);
      return {
        ...state,
        selectedNoteId: null,
        isAddNotesOpen: true,
      };

    // close add note form
    case TYPE.SET_ADD_NOTES_CLOSED:
      localStorageUtil.remove(LSKey.SELECTED_NOTE);
      return {
        ...state,
        selectedNoteId: state.notes.length ? state.notes[0].id : null,
        isAddNotesOpen: false,
      };

    default:
      throw new Error('Unknown error in reducer');
  }
};

export default reducer;

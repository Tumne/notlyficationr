import React, { createContext, useEffect, useReducer } from 'react';
import { localStorageUtil, LSKey } from '../utils/localStorageUtil';
import { IContextProps, INoteProvider, IState } from './interfaces';
import reducer from './reducer';

export const initialState: IState = {
  notes: [],
  selectedNoteId: null,
  isAddNotesOpen: false,
};

const LSNotes = localStorageUtil.get(LSKey.NOTES);
const LSselectedNoteId = localStorageUtil.get(LSKey.SELECTED_NOTE);

// access state, dispatch via the useContext hook
const NoteContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => {},
});

const { Provider } = NoteContext;

// initiate reducer and get/set localStorage data into the app
const NoteProvider = ({ children }: INoteProvider) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...(LSNotes && { notes: LSNotes }),
    selectedNoteId: LSselectedNoteId || null,
  });
  const { notes, selectedNoteId } = state;

  useEffect(() => {
    if (notes.length) {
      localStorageUtil.set(LSKey.NOTES, notes);
    }
  }, [notes]);

  useEffect(() => {
    if (selectedNoteId) {
      localStorageUtil.set(LSKey.SELECTED_NOTE, selectedNoteId);
    }
  }, [selectedNoteId]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { NoteContext, NoteProvider };

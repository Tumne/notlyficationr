import React, { createContext, useEffect, useReducer } from 'react';
import { localStorageUtil, LSKey } from '../utils/localStorageUtil';
import { IContextProps, INoteProvider, IState } from './interfaces';
import reducer from './reducer';

export const initialState: IState = {
  notes: [],
  selectedNote: null,
  isNotesOpen: false,
};

// NoteContext used to manage note state via the useContext hook
const NoteContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => {},
});

const { Provider } = NoteContext;

// NoteContext gets and sets localStorage data
const NoteProvider = ({ children }: INoteProvider) => {
  const LSNotes = localStorageUtil.get(LSKey.NOTES);
  const LSSelectedNote = localStorageUtil.get(LSKey.SELECTED_NOTE);
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...(LSNotes && { notes: LSNotes }),
    ...(LSSelectedNote && { selectedNote: LSSelectedNote }),
  });
  const { notes, selectedNote } = state;

  useEffect(() => {
    if (notes.length) {
      localStorageUtil.set(LSKey.NOTES, notes);
    }
  }, [notes]);

  useEffect(() => {
    localStorageUtil.set(LSKey.SELECTED_NOTE, selectedNote);
  }, [selectedNote]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { NoteContext, NoteProvider };

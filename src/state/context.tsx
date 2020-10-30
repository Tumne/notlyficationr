import React, {
  createContext,
  ReactChild,
  ReactChildren,
  useEffect,
  useReducer,
} from 'react';
import reducer from './reducer';
import { IAction, IState } from './interfaces';
import { localStorageUtil, LSKey } from './utils/localStorageUtil';

export const initialState: IState = {
  notes: [],
  selectedNote: null,
};

interface IContextProps {
  state: IState;
  dispatch: (action: IAction) => void;
}

const NoteContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => {},
});

const { Provider } = NoteContext;

interface INoteProvider {
  children: ReactChild | ReactChildren;
}

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

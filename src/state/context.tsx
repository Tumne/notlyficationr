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

const initialState: IState = {
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
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...(LSNotes && { notes: LSNotes }),
  });

  useEffect(() => {
    if (state.notes.length) {
      localStorageUtil.set(LSKey.NOTES, state.notes);
    }
  }, [state]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { NoteContext, NoteProvider };

import React, {
  createContext,
  ReactChild,
  ReactChildren,
  useEffect,
  useReducer,
} from 'react';
import reducer from './noteReducer';
import { IAction, IState } from './interfaces';
import { localStorageUtil, LSKey } from './utils/localStorageUtil';

const initialState: IState = {
  notes: [],
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
  const notesLS = localStorageUtil.get(LSKey.NOTES);
  const [state, dispatch] = useReducer(
    reducer,
    notesLS ? { notes: notesLS } : initialState
  );

  useEffect(() => {
    if (state.notes.length) {
      localStorageUtil.set(LSKey.NOTES, state.notes);
    }
  }, [state]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { NoteContext, NoteProvider };

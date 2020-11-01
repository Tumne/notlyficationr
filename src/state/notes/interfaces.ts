import { ReactChild, ReactChildren } from 'react';
import { TYPE } from './constants';

export interface INote {
  id: string;
  title: string;
  text: string;
}

export interface IState {
  notes: INote[];
  selectedNoteId: string | null;
  isAddNotesOpen: boolean;
}

export interface IAction {
  type: TYPE;
  payload?: INote | string | boolean;
}

export interface INoteContext {
  state: IState;
  dispatch: (action: IAction) => void;
}

export interface INoteProvider {
  children: ReactChild | ReactChildren;
}

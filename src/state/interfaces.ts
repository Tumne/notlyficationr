import { TYPE } from './constants';

export interface INote {
  id: string;
  title: string;
  text: string;
}

export interface IState {
  notes: INote[];
  selectedNote: INote | null;
}

export interface IAction {
  type: TYPE;
  payload?: INote[] | INote | string;
}

import { TYPE } from './constants';

export interface INote {
  id: string;
  text: string;
}

export interface IState {
  notes: INote[];
}

export interface IAction {
  type: TYPE;
  payload?: INote[] | string;
}
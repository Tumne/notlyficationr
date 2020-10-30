import { INote } from '../interfaces';

export enum LSKey {
  NOTES = 'notes',
  SELECTED_NOTE = 'selectedNote',
}

interface IValues {
  [LSKey.NOTES]: INote[];
  [LSKey.SELECTED_NOTE]: INote | null;
}

interface LocalStorageUtil {
  set: <T extends LSKey>(key: T, object: IValues[T]) => void;
  get: <T extends LSKey>(key: T) => IValues[T];
  remove: (key: LSKey) => void;
  removeAll: () => void;
}

export const localStorageUtil: LocalStorageUtil = {
  set: (key, object) => localStorage.setItem(key, JSON.stringify(object)),
  get: (key) => {
    const LSItem = localStorage.getItem(key);
    return LSItem ? JSON.parse(LSItem) : null;
  },
  remove: (key) => localStorage.removeItem(key),
  removeAll: () => localStorage.clear(),
};

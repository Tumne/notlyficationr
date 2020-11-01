import React, { useContext } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../../state/notes/constants';
import { NoteContext } from '../../../state/notes/context';
import { INote } from '../../../state/notes/interfaces';
import TemplateSrc from '../../assets/template.png';
import { Flex } from '../../common';
import AddEditNote from './operations/AddEditNote';
import ViewNote from './operations/ViewNote';

const PlaceholderImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const initialNote: INote = {
  id: '',
  title: '',
  text: '',
};

const NotesDetails: React.FC<{}> = () => {
  const {
    dispatch,
    state: { notes, selectedNoteId, isAddNotesOpen },
  } = useContext(NoteContext);
  const note = notes.find(({ id }) => id === selectedNoteId) || initialNote;

  let details = <PlaceholderImg src={TemplateSrc} />;

  if (selectedNoteId) {
    details = <ViewNote {...note} />;
  } else if (isAddNotesOpen) {
    details = (
      <AddEditNote
        note={note}
        onSubmit={(newNote) => {
          dispatch({
            type: TYPE.ADD_NOTE,
            payload: newNote,
          });
        }}
        onCancelClose={() => dispatch({ type: TYPE.SET_ADD_NOTES_CLOSED })}
      />
    );
  }

  return <Flex>{details}</Flex>;
};

export default NotesDetails;

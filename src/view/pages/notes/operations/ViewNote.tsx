import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../../../state/notes/constants';
import { NoteContext } from '../../../../state/notes/context';
import { INote } from '../../../../state/notes/interfaces';
import { Button } from '../../../common';
import AddEditNote from './AddEditNote';
import DeleteNote from './DeleteNote';

const Paragraph = styled.p`
  height: calc(100vh - 210px);
  overflow: scroll;
  white-space: pre-line;
  margin: 42px 0 0;
`;

const ViewNote: React.FC<INote> = (note) => {
  const { id, title, text } = note;
  const { dispatch } = useContext(NoteContext);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [id, setToggle]);

  return toggle ? (
    <AddEditNote
      note={note}
      onSubmit={(newNote) => {
        dispatch({
          type: TYPE.UPDATE_NOTE,
          payload: newNote,
        });
      }}
      onCancelClose={() => setToggle(false)}
    />
  ) : (
    <div>
      <div>
        <Button
          variantColor="#377bb5"
          type="button"
          width={70}
          onClick={() => setToggle(true)}
        >
          Edit
        </Button>
        <DeleteNote id={id} />
      </div>
      <div style={{ padding: '0 21px' }}>
        <h3 style={{ margin: '21px 0' }}>{title}</h3>
        <Paragraph>{text}</Paragraph>
      </div>
    </div>
  );
};

export default ViewNote;

import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../../state/notes/constants';
import { NoteContext } from '../../../state/notes/context';
import { INote } from '../../../state/notes/interfaces';
import { Button, Flex, Input, TextArea } from '../../common';
import { DeleteNote } from './DeleteNote';

const Paragraph = styled.p`
  height: calc(100vh - 210px);
  overflow: scroll;
  white-space: pre-line;
  margin: 42px 0 0;
`;

// TODO: refactor edit functionality into AddNote.tsx, rename AddModifyNote.tsx
export const EditViewNote: React.FC<INote> = ({ id, text, title }) => {
  const { dispatch } = useContext(NoteContext);
  const [toggle, setToggle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  const handleReset = useCallback(() => {
    setNewText(text);
    setNewTitle(title);
    setToggle(false);
  }, [title, text]);

  useEffect(() => {
    handleReset();
  }, [id, handleReset]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newTitle && newText) {
      if (text !== newText || title !== newText) {
        dispatch({
          type: TYPE.UPDATE_NOTE,
          payload: { id, title: newTitle, text: newText },
        });
      }
      setToggle(false);
    } else {
      handleReset();
    }
  };

  return (
    <div>
      {toggle ? (
        <>
          <div>
            <Button
              type="button"
              variantColor="#349336"
              width={70}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button type="button" onClick={handleReset}>
              Cancel
            </Button>
            <DeleteNote id={id} />
          </div>
          <Flex>
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <TextArea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </Flex>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

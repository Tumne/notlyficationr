import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../../state/constants';
import { NoteContext } from '../../../state/context';
import { Button, Input, TextArea } from '../../common';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  id: string;
  title: string;
  text: string;
}

export const EditPreviewNote: React.FC<Props> = ({ id, text, title }) => {
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
      <div>
        {toggle ? (
          <>
            <Button type="button" onClick={handleSubmit}>
              Save
            </Button>
            <Button type="button" onClick={handleReset}>
              Cancel
            </Button>
          </>
        ) : (
          <Button type="button" onClick={() => setToggle(true)}>
            Edit
          </Button>
        )}
        <Button
          type="button"
          onClick={() => {
            dispatch({ type: TYPE.DELETE_NOTE, payload: id });
          }}
        >
          x
        </Button>
      </div>
      {toggle ? (
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
      ) : (
        <>
          <h3>{title}</h3>
          {text.split(`\n`).map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </>
      )}
    </div>
  );
};

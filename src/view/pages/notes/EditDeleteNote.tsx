import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../../state/constants';
import { NoteContext } from '../../../state/context';
import { Button } from '../../common';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: 'palevioletred';
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  height: 100px;
  padding: 0.5em;
  margin: 0.5em;
  color: 'palevioletred';
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

interface Props {
  id: string;
  title: string;
  text: string;
}

export const EditDeleteNote: React.FC<Props> = ({ id, text, title }) => {
  const { dispatch } = useContext(NoteContext);
  const [toggle, setToggle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newTitle || newText) {
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

  const handleReset = () => {
    setNewText(text);
    setToggle(false);
  };

  return (
    <div>
      {toggle ? (
        <>
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <TextArea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <Button type="button" onClick={handleSubmit}>
            Save
          </Button>
          <Button type="button" onClick={handleReset}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          {text}
          {/* {text.split(`\n`).map((item, i) => (
            <p key={i}>{item}</p>
          ))} */}
          <Button type="button" onClick={() => setToggle(true)}>
            Edit
          </Button>
        </>
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
  );
};

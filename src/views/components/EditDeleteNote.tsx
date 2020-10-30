import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../state/constants';
import { NoteContext } from '../../state/noteContext';
import { Button } from '../common';

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
  text: string;
}

export const EditDeleteNote: React.FC<Props> = ({ id, text }) => {
  const { dispatch } = useContext(NoteContext);
  const [toggle, setToggle] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newText) {
      if (text !== newText) {
        dispatch({ type: TYPE.EDIT_NOTE, payload: { id, text: newText } });
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
          <TextArea value={text} onChange={(e) => setNewText(e.target.value)} />
          <Button type="button" onClick={handleSubmit}>
            Save
          </Button>
          <Button type="button" onClick={handleReset}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          {text.split(`\n`).map((item, i) => (
            <p key={i}>{item}</p>
          ))}
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

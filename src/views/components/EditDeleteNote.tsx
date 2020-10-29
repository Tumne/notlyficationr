import React, { useContext, useState } from 'react';
import { TYPE } from '../../state/constants';
import { NoteContext } from '../../state/noteContext';
import { Button, Input } from '../common';

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
    if (text !== newText) {
      dispatch({ type: TYPE.EDIT_NOTE, payload: { id, text: newText } });
    }
    setToggle(false);
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
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              } else if (e.key === 'Escape') {
                handleReset();
              }
            }}
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
          {text}
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

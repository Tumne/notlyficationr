import React, { useContext, useState } from 'react';
import { TYPE } from '../../../../state/notes/constants';
import { NoteContext } from '../../../../state/notes/context';
import { Form, Button, Flex, Input, TextArea } from '../../../common';

const AddNote: React.FC<{}> = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');

  const { dispatch } = useContext(NoteContext);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: TYPE.ADD_NOTE,
          payload: {
            id: new Date().valueOf().toString(),
            title: newTitle,
            text: newText,
          },
        });
        setNewText('');
        setNewTitle('');
      }}
    >
      <Button
        type="submit"
        variantColor="#349336"
        disabled={!newTitle || !newText}
      >
        Add
      </Button>
      <Button
        type="button"
        onClick={() => dispatch({ type: TYPE.SET_NOTES_OPEN, payload: false })}
      >
        Cancel
      </Button>
      <Flex>
        <Input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Title"
        />
        <TextArea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Add text here..."
        />
      </Flex>
    </Form>
  );
};

export default AddNote;

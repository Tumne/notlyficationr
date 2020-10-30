import React, { useContext, useState } from 'react';
import { TYPE } from '../../../state/constants';
import { NoteContext } from '../../../state/context';
import { Button, Input, TextArea } from '../../common';
import Form from '../../common/Form';
import { Flex } from './EditPreviewNote';

const AddNote: React.FC<{}> = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const { dispatch } = useContext(NoteContext);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: TYPE.ADD_NOTE,
          payload: { id: new Date().valueOf().toString(), title, text },
        });
        setText('');
        setTitle('');
      }}
    >
      <Button type="submit" disabled={!title || !text}>
        Save
      </Button>
      <Flex>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add text here..."
        />
      </Flex>
    </Form>
  );
};

export default AddNote;

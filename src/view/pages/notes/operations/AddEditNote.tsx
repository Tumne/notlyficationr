import React, { useState } from 'react';
import { INote } from '../../../../state/notes/interfaces';
import { Button, Flex, Form, Input, TextArea } from '../../../common';
import DeleteNote from './DeleteNote';

interface AddEditNoteProps {
  note: INote;
  onSubmit: (note: INote) => void;
  onCancelClose: () => void;
}

const AddEditNote: React.FC<AddEditNoteProps> = ({
  note,
  onSubmit,
  onCancelClose,
}) => {
  const { id, text, title } = note;
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  const handleReset = () => {
    setNewText(text);
    setNewTitle(title);
    onCancelClose();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      id: id || new Date().valueOf().toString(),
      title: newTitle,
      text: newText,
    });
    handleReset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Button
          type="submit"
          variantColor="#349336"
          width={70}
          disabled={!newTitle || !newText}
        >
          {id ? 'Save' : 'Add'}
        </Button>
        <Button type="button" onClick={handleReset}>
          Cancel
        </Button>
        {id && <DeleteNote id={id} />}
      </div>
      <Flex>
        <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <TextArea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      </Flex>
    </Form>
  );
};

export default AddEditNote;

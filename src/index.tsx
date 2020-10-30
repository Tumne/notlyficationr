import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NoteProvider } from './state/context';
import App from './view/layout/App';

ReactDOM.render(
  <NoteProvider>
    <App />
  </NoteProvider>,
  document.getElementById('root')
);

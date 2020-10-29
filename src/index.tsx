import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NoteProvider } from './state/noteContext';
import App from './views/layout/App';

ReactDOM.render(
  <NoteProvider>
    <App />
  </NoteProvider>,
  document.getElementById('root')
);

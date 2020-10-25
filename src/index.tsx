/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

type Mocked = Array<{
  completed: boolean;
  name: string;
  uid: string;
}>;

const DATA: Mocked = [
  { uid: 'todo-0', name: 'Eat', completed: true },
  { uid: 'todo-1', name: 'Sleep', completed: false },
  { uid: 'todo-2', name: 'Repeat', completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App data={DATA} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.info);

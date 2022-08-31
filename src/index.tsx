import React from 'react';
import ReactDOM from 'react-dom/client';
import ExpensesApp from './ExpensesApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExpensesApp />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
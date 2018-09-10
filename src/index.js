import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import App from './App';
import PDF from './PDF';

if (process.env.REACT_APP_BUILD_PDF) {
  ReactDOM.render(<PDF />, document.getElementById('root'));
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}

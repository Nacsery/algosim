import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode >
    <Container className="bg-primary" fluid>
      <App />
    </Container>

  </React.StrictMode>,
  document.getElementById('root')
);

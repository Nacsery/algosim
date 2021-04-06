import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode >
    <Container style={{
      height: '100vh'
    }}
      className="bg-primary" fluid>
      <Container style={{
        paddingTop: 10
      }} fluid>
        <App />
      </Container>

    </Container>

  </React.StrictMode>,
  document.getElementById('root')
);

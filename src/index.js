import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
document.body.style.backgroundColor = "#0d6efd";
ReactDOM.render(
  <React.StrictMode >
    <Container fluid>
      <Container style={{
        paddingTop: 10,
        paddingBottom: 20
      }} fluid>
        <App />
      </Container>

    </Container>

  </React.StrictMode>,
  document.getElementById('root')
);

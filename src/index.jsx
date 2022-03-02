import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

// changer la valeur de basename dependement du url de la page avec href (pour tester l'url entiere) ou hostname (pour juste le nom du host)
const baseName = (window.location.hostname.search(/github\.io/i) != -1) ? '/panier-achats' : '';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={baseName}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('racine')
);
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';

import './styles/index.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <p>Inicio</p>
          </Route>
          <Route path="/contenido">
            <p>Contenido</p>
          </Route>
          <Route path="/acerca-de">
            <p>Acerca de</p>
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
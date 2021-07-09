import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';

import './styles/index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './pages/Content';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contenido">
            <Content />
          </Route>
          <Route path="/acerca-de">
            <About />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
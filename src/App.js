import React, { Suspense } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Helmet from 'react-helmet';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';

import './styles/index.css';

const Content = React.lazy(() => import('./pages/Content'));
const About = React.lazy(() => import('./pages/About'));
const Footer = React.lazy(() => import('./components/Footer'));
import Header from './components/Header';
import Home from './pages/Home';
import SpinnerLoading from './components/commons/SpinnerLoading';

const App = () => {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Helmet>
              <title>Inicio | Aprendamos Zapoteco del Sur</title>
              <meta
                name="description"
                content="Conoce, descarga e instala esta aplicación de escritorio denominada Aprendamos Zapoteco, para fomentar esta hermosa lengua, así como su identidad cultural."
              />
            </Helmet>
            <Home />
          </Route>
          <Route path="/contenido">
            <Suspense fallback={ <SpinnerLoading /> }>
              <Helmet>
                <title>Contenido | Aprendamos Zapoteco del Sur</title>
                <meta
                  name="description"
                  content="Consulta las secciones generales, así como una breve descripción, con las que cuenta esta aplicación de escritorio denominada Aprendamos Zapoteco del Sur."
                />
              </Helmet>
              <Content />
            </Suspense>
          </Route>
          <Route path="/acerca-de">
            <Suspense fallback={ <SpinnerLoading /> }>
              <Helmet>
                <title>Acerca de | Aprendamos Zapoteco del Sur</title>
                <meta
                  name="description"
                  content="Descubre el lugar de origen de esta aplicación de escritorio para aprender zapoteco, así como también algunos de sus participantes, y también información sobre sus desarrolladores."
                />
              </Helmet>
              <About />
            </Suspense>
          </Route>
        </Switch>
      </main>
      <Suspense fallback={ <SpinnerLoading /> }>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
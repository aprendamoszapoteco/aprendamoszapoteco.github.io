import React, { Suspense } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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
            <Home />
          </Route>
          <Route path="/contenido">
            <Suspense fallback={ <SpinnerLoading /> }>
              <Content />
            </Suspense>
          </Route>
          <Route path="/acerca-de">
            <Suspense fallback={ <SpinnerLoading /> }>
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
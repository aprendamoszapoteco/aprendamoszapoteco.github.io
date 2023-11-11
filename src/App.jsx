import { Suspense, lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import Helmet from 'react-helmet';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';

import './styles/index.css';

const Content = lazy(() => import('./pages/Content'));
const About = lazy(() => import('./pages/About'));
const Footer = lazy(() => import('./components/Footer'));
import Header from './components/Header';
import Home from './pages/Home';
import SpinnerLoading from './components/commons/SpinnerLoading';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index
            element={
              <>
                <Helmet>
                  <title>Inicio | Aprendamos Zapoteco del Sur</title>
                  <meta
                    name="description"
                    content="Conoce, descarga e instala esta aplicación de escritorio denominada Aprendamos Zapoteco, para fomentar esta hermosa lengua, así como su identidad cultural."
                  />
                </Helmet>
                <Home />
              </>
            }
          />
          <Route path='contenido'
            element={
              <>
                <Helmet>
                  <title>Contenido | Aprendamos Zapoteco del Sur</title>
                  <meta
                    name="description"
                    content="Consulta las secciones generales, así como una breve descripción, con las que cuenta esta aplicación de escritorio denominada Aprendamos Zapoteco del Sur."
                  />
                </Helmet>
                <Suspense fallback={ <SpinnerLoading /> }>  
                  <Content />
                </Suspense>
              </>
            }
          />
          <Route path='acerca-de'
            element={
              <>
                <Helmet>
                  <title>Acerca de | Aprendamos Zapoteco del Sur</title>
                  <meta
                    name="description"
                    content="Descubre el lugar de origen de esta aplicación de escritorio para aprender zapoteco, así como también algunos de sus participantes, y también información sobre sus desarrolladores."
                  />
                </Helmet>
                <Suspense fallback={ <SpinnerLoading /> }> 
                  <About />
                </Suspense>
              </>
            }
          />
        </Routes>
      </main>
      <Suspense fallback={ <SpinnerLoading /> }>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
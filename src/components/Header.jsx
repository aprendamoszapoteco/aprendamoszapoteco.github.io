import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import '../styles/styleHeader.css';

const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand d-flex justify-content-start align-items-center" href="/">
            <div className="logo-header">
              <picture>
                <source
                  srcSet={
                    new URL('../img/logo.webp', import.meta.url).href
                  }
                />
                <img src={
                  new URL('../img/logo.png', import.meta.url).href
                } alt="Logo" />
              </picture>
            </div>
            <h2 className="px-3 my-auto" style={ {fontSize: '1rem', fontWeight: 'bold'} }>
              Aprendamos Zapoteco
            </h2>
          </a>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={ {paddingRight: '5rem'} }>
              <li className="nav-item">
                <CustomNavLink
                  className="personalized-link"
                  end
                  to="/"
                >
                  Inicio
                </CustomNavLink>
              </li>
              <li className="nav-item">
                <CustomNavLink
                  className="personalized-link"
                  to="/contenido"
                >
                  Contenido
                </CustomNavLink>
              </li>
              <li className="nav-item">
                <CustomNavLink
                  className="personalized-link"
                  to="/acerca-de"
                >
                  Acerca de
                </CustomNavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="d-flex justify-content-center" style={ {background: '#222121'} }>
        <span
          style={ {padding: '0.5rem', color: '#ffffffcc', fontSize: '0.9rem'} }
        >
          Esta es la versión 1.0 de la aplicación de escritorio
        </span>
      </section>
    </>
  );
};

const CustomNavLink = styled(NavLink)`
  &.active {
    color: #fff !important;
    font-weight: bold;
  }
`

export default Header;
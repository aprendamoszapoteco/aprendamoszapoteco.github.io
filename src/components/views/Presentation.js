import React from 'react';
import ButtonMain from '../commons/ButtonMain';

const Presentation = () => {
  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center p-4 px-5"
      style={ {backgroundColor: '#3E3E3E', minHeight: '85vh'} }
    >
      <div className="pe-lg-4 text-white text-center">
        <h1 className="text-center fw-bold">{ 'Te\'dna distè' }</h1>
        <h2 style={ {fontSize: '1.1rem'} }>
          <p className="mb-0">Aprendamos</p>
          <p className="mb-4">Zapoteco</p>
        </h2>
        <ButtonMain />
        <p className="mt-4 mb-0">Si el link no funciona</p>
        <p><a href="#support" style={ {textDecoration: 'none', color: '#5AB6FF'} }>presiona aqui</a></p>
      </div>
      <div>
        <picture>
          <source type="image/webp"
            srcSet={ require('../../img/start/app.webp').default }
            className="img-fluid"
          />
          <img
            src={ require('../../img/start/app.png') }
            alt="Captura de la aplicación"
            className="img-fluid"
          />
        </picture>
      </div>
    </div>
  );
};

export default Presentation;
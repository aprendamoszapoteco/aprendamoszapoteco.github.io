import React from 'react';
import ButtonMain from '../commons/ButtonMain';

const Presentation = () => {
  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-lg-between p-4 px-5"
      style={ {backgroundColor: '#3E3E3E'} }
    >
      <div className="pe-lg-4 text-white text-center">
        <h3 className="text-center fw-bold">{ 'Te\'dna distè' }</h3>
        <p className="mb-0">Aprendamos</p>
        <p className="mb-4">Zapoteco</p>
        <ButtonMain />
        <p className="mt-4 mb-0">Si el link no funciona</p>
        <p><a href="#support" style={ {textDecoration: 'none'} }>presiona aqui</a></p>
      </div>
      <div>
        <picture className="img-fluid">
          <source type="image/webp"
            srcSet={ require('../../img/start/app.webp').default } />
          <img src={ require('../../img/start/app.png') }
            alt="Captura de la aplicación" className="img-fluid" />
        </picture>
      </div>
    </div>
  );
};

export default Presentation;
import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-center text-white px-3 py-4 d-flex flex-column flex-lg-row justify-content-lg-between"
      style={ {backgroundColor: '#3E3E3E', fontSize: '0.9rem'} }
    >
      <div className="d-flex justify-content-center align-items-center mb-3 mb-lg-0">
        <span>¡¡ Hola mundo !!</span>
      </div>
      <div style={ {lineHeight: '1.2rem'} }>
        <p className="mb-2 mb-lg-3">Creado por la Zona de Supervisión Indígena Núm. 184</p>
        <p className="mb-4 mb-lg-0">Calle Linda Vista S/N, Barrio Cerro Hermoso, Santo Domingo de Morelos, Oaxaca.</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div style={ {width: '3rem', height: '3rem', overflow: 'hidden'} }>
          <picture>
            <source
              srcSet={ require('../img/logo.webp').default }
              style={ {width: '100%', height: '100%', objectFit: 'contain'} }
            />
            <img
              src={ require('../img/logo.png').default } alt="Logo"
              style={ {width: '100%', height: '100%', objectFit: 'contain'} }
            />
          </picture>
        </div>
        <div className="fw-bold ms-4">Aprendamos Zapoteco</div>
      </div>
    </footer>
  );
};

export default Footer;
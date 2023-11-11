import ButtonMain from '../commons/ButtonMain';

const Presentation = () => {
  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center p-4 px-5"
      style={ {backgroundColor: '#3E3E3E', minHeight: '85vh'} }
    >
      <div className="pe-lg-4 text-white text-center flex-fill">
        <h1 className="text-center fw-bold">{ 'Te\'dna distè' }</h1>
        <h2 style={ {fontSize: '1.1rem', lineHeight: '1.6rem'} }>
          <p className="mb-0">Aprendamos</p>
          <p className="mb-4">Zapoteco</p>
        </h2>
        <ButtonMain />
        <p className="mt-4 mb-0">Si el link no funciona</p>
        <p><a href="#support" style={ {textDecoration: 'none', color: '#5AB6FF'} }>presiona aqui</a></p>
      </div>
      <div style={{ objectFit: 'contain', width: '60%' }}>
        <picture>
          <source type="image/webp"
            srcSet={ new URL('../../img/start/app.webp', import.meta.url).href }
            className="img-fluid"
          />
          <img
            src={ new URL('../../img/start/app.png', import.meta.url).href }
            alt="Captura de la aplicación"
            style={{ borderRadius: '10px' }}
            className="img-fluid"
          />
        </picture>
      </div>
    </div>
  );
};

export default Presentation;
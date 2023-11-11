import ButtonMain from '../commons/ButtonMain';
import styled from 'styled-components';

const Presentation = () => {
  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center p-4 px-5"
      style={ {backgroundColor: '#3E3E3E', minHeight: '85vh'} }
    >
      <div className="pe-lg-4 text-white text-center flex-md-fill">
        <h1 className="text-center fw-bold">{ 'Te\'dna distè' }</h1>
        <h2 style={ {fontSize: '1.1rem', lineHeight: '1.6rem'} }>
          <p className="mb-0">Aprendamos</p>
          <p className="mb-4">Zapoteco</p>
        </h2>
        <ButtonMain />
        <p className="mt-4 mb-0">Si el link no funciona</p>
        <p><a href="#support" style={ {textDecoration: 'none', color: '#5AB6FF'} }>presiona aqui</a></p>
      </div>
      <DivImage style={{ objectFit: 'contain' }}>
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
      </DivImage>
    </div>
  );
};

const DivImage = styled.div`
  width: 60%;
  @media screen and (max-width: 800px){
    width: 80%;
  }
  @media screen and (max-width: 700px){
    width: 90%;
  }
  @media screen and (max-width: 500px){
    width: 100%;
  }
`;
export default Presentation;
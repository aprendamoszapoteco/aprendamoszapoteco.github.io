import React from 'react';

import Subtitle from '../components/commons/Subtitle';
import CardDeveloper from '../components/cards/CardDeveloper';
import {listParticipants, listDataDevelopers} from '../data/about';

const About = () => {
  return (
    <>
      <section style={ {padding: '1.5rem', background: '#F8F8F8'} }>
        <article>
          <Subtitle>¿Donde se desarrolló la app?</Subtitle>
          <p>
            Esta app se desarrolló en la Zona de Supervisión Indígena Núm.
            184, bajo la ayuda y coordinación del Mtro. Arnulfo Ambrosio Pérez.
          </p>
        </article>
        <article style={ {paddingTop: '1.5rem'} }>
          <Subtitle>Ubicación</Subtitle>
          <p>
            <strong>Dirección:</strong> Calle Linda Vista S/N, Barrio Cerro Hermoso, Santo Domingo de Morelos, Oaxaca.
          </p>
          <p>
            <strong>Distrito:</strong> Pochutla.
          </p>
        </article>
      </section>
      <section style={ {padding: '1.5rem', background: '#DCEEF2'} }>
        <Subtitle>Participantes</Subtitle>
        <p>
          Gran parte de la ayuda, se recibió de los profesores y profesoras
          de la Zona de Supervisión Indígena Núm. 184, a continuación, se
          listarán el nombre de aquellos participantes que colaboraron con
          los audios, sin embargo, cabe mencionar la participación de muchas más personas.
        </p>
        <p className="text-center" style={ {lineHeight: '1rem'} }>
          { listParticipants &&
              listParticipants.map(value =>
                <p key={ value }>{ value }</p>
              )
          }
        </p>
      </section>
      <section
        style={ {padding: '1.5rem 0', background: '#F8F8F8'} }
      >
        <Subtitle>Desarrolladores de esta app</Subtitle>
        <div className="d-flex flex-wrap justify-content-evenly mt-4">
          { listDataDevelopers &&
              listDataDevelopers.map((data, index) =>
                <CardDeveloper
                  key={ index }
                  fullName={ data.fullName }
                  links={ data.links }
                  nameImage={ data.nameAvatar }
                />
              )
          }
        </div>
      </section>
    </>
  );
};

export default About;
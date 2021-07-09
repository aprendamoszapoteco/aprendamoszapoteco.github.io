import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/styleCardDeveloper.css';

const CardDeveloper = ({ nameImage, fullName, links }) => {
  return (
    <div className="card-developer">
      <div className="container-card-developer d-flex flex-wrap justify-content-evenly py-2">
        <div className="avatar">
          { nameImage &&
            <picture className="container-img-developer">
              <source
                srcSet={
                  require(`../../img/developers/${nameImage}.webp`).default
                }
              />
              <img
                src={
                  require(`../../img/developers/${nameImage}.png`).default
                }
                alt={ fullName }
              />
            </picture>
          }
        </div>
        <div className="d-flex flex-column justify-content-center">
          <strong style={ {fontSize: '1.3rem'} }>{ fullName }</strong>
          <div className="icons-developer mt-3" style={ {fontSize: '1.8rem'} }>
            { links[0] &&
              <a
                href={ links[0] }
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            }
            { links[1] &&
              <a
                href={ links[1] }
                target="_blank"
                rel="noreferrer"
              >
                <i className="mx-4 bi bi-linkedin"></i>
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

CardDeveloper.propTypes = {
  nameImage: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
};

export default CardDeveloper;
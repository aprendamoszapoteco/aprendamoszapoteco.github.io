import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Properties:
 *  pathImage -> A path that starts after img.
 *    For example, if the image is in img/about/image.png,
 *    the path would be: about/image.
 *  imageRight -> If the image should be on the right,
 *    by default it is positioned on the left.
 *  title -> The card title.
 *  children -> The description of the card.
 */

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
  line-height: 2.3rem
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    width: calc(100% - 200px)
  }
`;

const CardInformation = ({ pathImage, imageRight = false, title, children }) => {
  const positionImage = imageRight && 'flex-lg-row-reverse' || 'flex-lg-row';
  const background = imageRight && '#F8F8F8' || '#DCEEF2';
  const classSpacing = imageRight && 'pe-lg-4' || 'ps-lg-4';

  return (
    <div
      className={ `d-flex justify-content-center align-items-center flex-column py-3 px-4 ${positionImage}` }
      style={ {backgroundColor: background} }
    >
      <div
        className="mb-3 mb-lg-0 d-flex justify-content-center align-items-center"
        style={ {width: '200px', height: '200px'} }
      >
        <picture>
          <source
            type="image/webp"
            srcSet={ require(`../../img/${pathImage}.webp`).default }
            className="mw-100 mh-100"
          />
          <img src={ require(`../../img/${pathImage}.png`).default } className="mw-100 mh-100" />
        </picture>
      </div>
      <Information className={ classSpacing }>
        <Title>{ title }</Title>
        <p>{ children }</p>
      </Information>
    </div>
  );
};

CardInformation.propTypes = {
  pathImage: PropTypes.string,
  imageRight: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

export default CardInformation;
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

const Title = styled.h3`
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

const CardInformation = ({ pathImage, altImage, imageRight = false, title, children }) => {
  const folder = pathImage.split('/')[0];
  const image = pathImage.split('/')[1];
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
            srcSet={ new URL(`../../img/${folder}/${image}.webp`, import.meta.url).href }
            className="mw-100 mh-100"
          />
          <img
            src={ new URL(`../../img/${folder}/${image}.png`, import.meta.url).href }
            className="mw-100 mh-100"
            alt={ altImage }
          />
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
  pathImage: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
  imageRight: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default CardInformation;